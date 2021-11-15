import { BlogPostType, CategoryType } from '@quiver/types';
import React from 'react';

export interface BlogCategoriesPostsProps {
  posts: BlogPostType[];
  category: CategoryType;
  totalItems: number;
  children?: React.ReactNode;
}
