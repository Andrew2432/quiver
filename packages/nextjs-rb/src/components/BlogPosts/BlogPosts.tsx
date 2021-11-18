import {
  Article,
  BlogPaginatedPostsQuery,
  BlogPaginatedPostsQueryVariables,
  useBlogPaginatedPostsQuery,
} from '@quiver/graphql-client';
import { BlogPostType, GenericConnectionType } from '@quiver/types';
import * as React from 'react';
import useAuthorSlug from '../../utils/hooks/useAuthorSlug.hook';
import PageLoading from '../../utils/PageLoading';
import BlogPostCard from '../BlogPostCard';
import CustomPagination, { useCustomPagination } from '../CustomPagination';
import { BlogPostsProps } from './BlogPostsProps';

function createBlogPostCard(post: BlogPostType) {
  return <BlogPostCard post={post} />;
}

function PaginatedBlogPosts() {
  const authorSlug = useAuthorSlug();

  const {
    data,
    loading,
    cursorRef,
    handlePaginationClick,
  } = useCustomPagination<
    BlogPaginatedPostsQuery,
    BlogPaginatedPostsQueryVariables
  >({
    useHook: useBlogPaginatedPostsQuery,
    variables: {
      authorSlug,
    },
  });

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];
  const {
    aggregate: { count: totalItems },
  } = data?.articlesConnection as GenericConnectionType<Article>;

  const customPaginationProps = {
    handlePaginationClick,
    cursorRef,
    totalItems,
  };

  return (
    <>
      {React.Children.toArray(posts.map(createBlogPostCard))}
      <CustomPagination {...customPaginationProps} />
    </>
  );
}

function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <>
      <PaginatedBlogPosts />
    </>
  );
}

export default BlogPosts;
