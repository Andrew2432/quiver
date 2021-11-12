import { GetServerSidePropsContext } from 'next';
import getConfig from 'next/config';
import axios from 'axios';
import globby from 'globby';

import { BlogPost } from '../types/BlogProps';
import { Project } from '../types/ProjectProps';

const {
  publicRuntimeConfig: { base_url, wp_api_url, wp_project_url },
} = getConfig();

function createPostsSitemap(posts: BlogPost[]) {
  return posts
    .map(({ slug }: BlogPost) => {
      return `
        <url>
          <loc>${`${base_url}/blog/posts/${slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
    `;
    })
    .join('');
}

function createProjectsSitemap(projects: Project[]) {
  return projects
    .map(({ project_slug }: Project) => {
      return `
        <url>
          <loc>${`${base_url}/portfolio/projects/${project_slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
    `;
    })
    .join('');
}

async function createStaticSitemap() {
  const pages = await globby([
    `src/pages/**/*{.tsx,.ts,.jsx,.js}`,
    `!src/pages/_*{.tsx,.ts,.jsx,.js}`,
    `!src/pages/api`,
  ]);

  return pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('src//', '')
        .replace('.tsx', '')
        .replace('.ts', '')
        .replace('.jsx', '')
        .replace('.js', '');
      const route = path === '/index' ? '' : path;

      return `
        <url>
          <loc>${base_url}/${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join('');
}

function SitemapPage() {}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const { data: postsData } = await axios.get(
    `${wp_api_url}/posts?_embed&posts_per_page=-1`
  );
  const { data: projectsData } = await axios.get(
    `${wp_project_url}/projects?posts_per_page=-1`
  );

  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>`);
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http//www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >`);

  res.write(await createStaticSitemap());
  res.write(createPostsSitemap(postsData as BlogPost[]));
  res.write(createProjectsSitemap(projectsData as Project[]));

  res.write(`</urlset>`);
  res.end();

  return {
    props: {},
  };
}

export default SitemapPage;
