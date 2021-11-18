import {
  Article,
  BlogPaginatedCategoriesPostsQuery,
  BlogPaginatedCategoriesPostsQueryVariables,
  useBlogPaginatedCategoriesPostsQuery,
} from '@quiver/graphql-client';
import {
  BlogPostType,
  CategoryType,
  GenericConnectionType,
} from '@quiver/types';
import { GetServerSidePropsContext } from 'next';
import * as React from 'react';
import BlogCategoriesPosts, {
  BlogCategoriesPostsProps,
} from '../../../components/BlogCategoriesPosts';
import CustomPagination, {
  CustomPaginationProps,
  useCustomPagination,
} from '../../../components/CustomPagination';
import Layout from '../../../layouts/Layout';
import SEO, { SEOProps } from '../../../layouts/SEO';
import useAuthorSlug from '../../../utils/hooks/useAuthorSlug.hook';
import PageLoading from '../../../utils/PageLoading';

interface Props {
  categorySlug: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;

  const categorySlug = all?.[0] as string;

  return {
    props: {
      categorySlug,
    } as Props,
  };
}

function BlogCategoriesPostsPage({ categorySlug }: Props) {
  const authorSlug = useAuthorSlug();

  const {
    data,
    loading,
    cursorRef,
    handlePaginationClick,
    error,
  } = useCustomPagination<
    BlogPaginatedCategoriesPostsQuery,
    BlogPaginatedCategoriesPostsQueryVariables
  >({
    useHook: useBlogPaginatedCategoriesPostsQuery,
    variables: {
      categorySlug,
      authorSlug,
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
