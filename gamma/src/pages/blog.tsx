import BlogPosts from '../components/blog/blogPosts/BlogPosts';
import { BlogPostType } from '../components/blog/types/BlogPostType';
import { useArticlesQuery } from '../generated/graphql';
import Layout from '../layout/layout/Layout';
import SEO from '../layout/seo/SEO';

function BlogPage() {
  const { data, loading } = useArticlesQuery();

  if (loading) return null;

  const posts = (data?.articles ?? []) as BlogPostType[];

  return (
    <Layout>
      <SEO title="Blog" description="Blog Page">
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
        />
      </SEO>
      <BlogPosts posts={posts} />
    </Layout>
  );
}

export default BlogPage;
