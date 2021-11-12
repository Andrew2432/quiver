import * as React from "react";
import { BlogPostType } from "../../newTypes/BlogPostType";
import GenericBlogPostCard from "./GenericBlogPostCard";
import { GenericBlogPostsProps } from "./GenericBlogPostsProps";

function createGenericBlogPostCard(post: BlogPostType) {
  return <GenericBlogPostCard post={post} />;
}

function GenericBlogPosts({ posts }: GenericBlogPostsProps) {
  return <>{React.Children.toArray(posts.map(createGenericBlogPostCard))}</>;
}

export default GenericBlogPosts;
