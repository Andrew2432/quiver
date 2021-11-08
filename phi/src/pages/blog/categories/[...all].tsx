import { GetServerSidePropsContext } from "next";
import * as React from "react";
import BlogCategoriesPosts from "../../../components/blogCategoriesPosts/BlogCategoriesPosts";
import { BlogCategoriesPostsProps } from "../../../components/blogCategoriesPosts/BlogCategoriesPostsProps";
import CustomPagination from "../../../components/customPagination/CustomPagination";
import { CustomPaginationProps } from "../../../components/customPagination/CustomPaginationProps";
import useCustomPagination from "../../../components/customPagination/useCustomPagination.hook";
import {
  Article,
  BlogPaginatedCategoriesPostsQuery,
  useBlogPaginatedCategoriesPostsQuery,
} from "../../../generated/graphql";
import Layout from "../../../layouts/Layout";
import SEO from "../../../layouts/SEO";
import { BlogPostType } from "../../../newTypes/BlogPostType";
import { CategoryType } from "../../../newTypes/CategoryType";
import { GenericConnectionType } from "../../../newTypes/GenericConnectionType";
import { SEOProps } from "../../../types/SEOProps";
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
  const { data, loading, cursorRef, handlePaginationClick, error } =
    useCustomPagination<BlogPaginatedCategoriesPostsQuery>({
      useHook: useBlogPaginatedCategoriesPostsQuery,
      variables: {
        slug,
      },
    });

  if (loading) return <PageLoading />;

  const category = data?.categories?.[0] as CategoryType;
  const posts = data?.categories?.[0]?.articles as BlogPostType[];
  const {
    aggregate: { count: totalItems },
  } = data?.articlesConnection as GenericConnectionType<Article>;

  const seoProps: SEOProps = {
    title: `Category: ${category.name}`,
    description: category.description,
  };

  const blogCategoriesPostsProps: BlogCategoriesPostsProps = {
    posts,
    category,
    totalItems,
  };

  const customPaginationProps: CustomPaginationProps = {
    handlePaginationClick,
    cursorRef,
    totalItems,
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <BlogCategoriesPosts {...blogCategoriesPostsProps}>
        <CustomPagination {...customPaginationProps} />
      </BlogCategoriesPosts>
    </Layout>
  );
}

export default BlogCategoriesPostsPage;
