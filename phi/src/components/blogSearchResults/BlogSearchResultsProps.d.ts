import { BlogPostType } from "../../newTypes/BlogPostType";

export interface BlogSearchResultsProps {
  query?: string;
  posts: BlogPostType[];
}
