import {
  Article,
  BlogPaginatedSearchQuery,
  BlogPaginatedSearchQueryVariables,
  useBlogPaginatedSearchQuery,
} from '@quiver/graphql-client';
import { BlogPostType, GenericConnectionType } from '@quiver/types';
import { GetServerSidePropsContext } from 'next';
import * as React from 'react';
import BlogSearchResults, {
  BlogSearchResultsProps,
} from '../../../components/BlogSearchResults';
import CustomPagination, {
  CustomPaginationProps,
  useCustomPagination,
} from '../../../components/CustomPagination';
import Layout from '../../../layouts/Layout';
import SEO, { SEOProps } from '../../../layouts/SEO';
import useAuthorSlug from '../../../utils/hooks/useAuthorSlug.hook';
import PageLoading from '../../../utils/PageLoading';

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
  const authorSlug = useAuthorSlug();

  const {
    data,
    loading,
    cursorRef,
    handlePaginationClick,
  } = useCustomPagination<
    BlogPaginatedSearchQuery,
    BlogPaginatedSearchQueryVariables
  >({
    useHook: useBlogPaginatedSearchQuery,
    variables: {
      query,
      authorSlug,
    },
  });

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];
  const {
    aggregate: { count: totalItems },
  } = data?.articlesConnection as GenericConnectionType<Article>;

  const seoProps: SEOProps = {
    title: 'Search Results',
    description: `Search results for query ${query}`,
  };

  const blogSearchResultsProps: BlogSearchResultsProps = {
    posts,
    totalItems,
    query,
  };

  const customPaginationProps: CustomPaginationProps = {
    handlePaginationClick,
    cursorRef,
    totalItems,
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <BlogSearchResults {...blogSearchResultsProps}>
        <CustomPagination {...customPaginationProps} />
      </BlogSearchResults>
    </Layout>
  );
}

export default PostsSearchPage;
