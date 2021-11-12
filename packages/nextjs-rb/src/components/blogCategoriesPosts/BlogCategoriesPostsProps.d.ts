import React from "react";
import { BlogPostType } from "../../newTypes/BlogPostType";
import { CategoryType } from "../../newTypes/CategoryType";

export interface BlogCategoriesPostsProps {
  posts: BlogPostType[];
  category: CategoryType;
  totalItems: number;
  children?: React.ReactNode;
}
