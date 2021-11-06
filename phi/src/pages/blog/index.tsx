import Blog from "../../components/blog/Blog";
import { useBlogPostsQuery } from "../../generated/graphql";
import Layout from "../../layouts/Layout";
import SEO from "../../layouts/SEO";
import { BlogPostType } from "../../newTypes/BlogPostType";
import PageLoading from "../../utils/PageLoading";

function BlogPage() {
  const { data, loading, error } = useBlogPostsQuery();

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];

  return (
    <Layout>
      <SEO title="Blog" description="Blog" />
      <Blog posts={posts} />
    </Layout>
  );
}

export default BlogPage;
