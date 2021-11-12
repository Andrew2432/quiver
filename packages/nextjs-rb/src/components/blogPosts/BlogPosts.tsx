import * as React from "react";
import {
  BlogPaginationQuery,
  useBlogPaginationQuery,
} from "../../generated/graphql";
import { BlogPostType } from "../../newTypes/BlogPostType";
import PageLoading from "../../utils/PageLoading";
import CustomPagination from "../customPagination/CustomPagination";
import useCustomPagination from "../customPagination/useCustomPagination.hook";
import BlogPostCard from "./BlogPostCard";
import { BlogPostsProps } from "./BlogPostsProps";

function createBlogPostCard(post: BlogPostType) {
  return <BlogPostCard post={post} />;
}

function PaginatedBlogPosts() {
  const { data, loading, cursorRef, handlePaginationClick } =
    useCustomPagination<BlogPaginationQuery>({
      useHook: useBlogPaginationQuery,
    });

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];
  const totalItems = data?.articlesCount as number;

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
