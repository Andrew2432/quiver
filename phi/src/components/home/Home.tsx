import * as React from 'react';
import useSWR from 'swr';

import ThemeContext from '../../utils/ThemeContext';
import fetcher from '../../utils/fetcher';

import Hero from './Hero';
import HomeBio from './HomeBio';
import HomeProjects from './HomeProjects';
import HomeBlog from './HomeBlog';
import HomeContact from './HomeContact';
import PageLoading from '../../utils/PageLoading';
import { Project } from '../../types/ProjectProps';

const { useContext } = React;

function Home(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const { data: projectsData } = useSWR(
    `${
      process.env.NEXT_PUBLIC_WP_PROJECT_URL as string
    }/projects?projects_per_page=-1`,
    fetcher,
  );

  const { data: blogData } = useSWR(
    `${process.env.NEXT_PUBLIC_WP_API_URL as string}/posts?_embed&per_page=3`,
    fetcher,
  );

  if (!projectsData || !blogData) return <PageLoading />;

  const topProjects = (projectsData.data as Project[]).filter(
    (project) => project.project_is_top === 'true',
  );

  return (
    <>
      <Hero />
      <HomeBio theme={theme} />
      <HomeProjects theme={theme} projects={topProjects} />
      <HomeBlog theme={theme} posts={blogData.data} />
      <HomeContact theme={theme} />
    </>
  );
}

export default Home;
