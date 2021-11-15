import { BlogPostType } from '@quiver/types';

export interface BlogSearchResultsProps {
  query?: string;
  posts: BlogPostType[];
  totalItems: number;
  children?: React.ReactNode;
}

export interface SearchResultsProps {
  posts: BlogPostType[];
}
