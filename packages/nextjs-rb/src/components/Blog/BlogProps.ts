import { BlogPostType } from '@quiver/types';

export interface BlogProps {
  posts: BlogPostType[];
  children?: React.ReactNode;
}
