import { BlogPostType } from "../../newTypes/BlogPostType";

export interface BlogProps {
  posts: BlogPostType[];
  children?: React.ReactNode;
}
