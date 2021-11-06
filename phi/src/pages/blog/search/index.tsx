import { GetServerSidePropsContext } from "next";
import * as React from "react";
import BlogSearchResults from "../../../components/blogSearchResults/BlogSearchResults";
import { useBlogSearchPostsQuery } from "../../../generated/graphql";
import Layout from "../../../layouts/Layout";
import SEO from "../../../layouts/SEO";
import { BlogPostType } from "../../../newTypes/BlogPostType";
import PageLoading from "../../../utils/PageLoading";

interface Props {
  query: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context.query;

  return {
    props: {
      query,
    },
  };
}

function PostsSearchPage({ query }: Props) {
  const { data, loading, error } = useBlogSearchPostsQuery({
    variables: {
      query,
    },
  });

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];

  return (
    <Layout>
      <SEO
        title={`Search Results`}
        description={`Search results for query ${query}`}
      />
      <BlogSearchResults query={query} posts={posts} />
    </Layout>
  );
}

export default PostsSearchPage;
