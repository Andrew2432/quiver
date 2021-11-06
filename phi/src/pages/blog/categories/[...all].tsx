import { GetServerSidePropsContext } from "next";
import * as React from "react";
import BlogCategoriesPosts from "../../../components/blogCategoriesPosts/BlogCategoriesPosts";
import { useBlogCategoriesPostsQuery } from "../../../generated/graphql";
import Layout from "../../../layouts/Layout";
import SEO from "../../../layouts/SEO";
import { BlogPostType } from "../../../newTypes/BlogPostType";
import { CategoryType } from "../../../newTypes/CategoryType";
import PageLoading from "../../../utils/PageLoading";

interface Props {
  slug: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;

  const slug = all?.[0] as string;

  return {
    props: {
      slug,
    },
  };
}

function BlogCategoriesPostsPage({ slug }: Props) {
  const { data, loading, error } = useBlogCategoriesPostsQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <PageLoading />;

  const category = data?.categories?.[0] as CategoryType;
  const posts = data?.categories?.[0]?.articles as BlogPostType[];

  return (
    <Layout>
      <SEO
        title={`Category: ${category.name}`}
        description={category.description}
      />
      <BlogCategoriesPosts posts={posts} category={category} />
    </Layout>
  );
}

export default BlogCategoriesPostsPage;
