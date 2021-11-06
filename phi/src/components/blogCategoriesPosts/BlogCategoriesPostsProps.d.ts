import { BlogPostType } from "../../newTypes/BlogPostType";
import { CategoryType } from "../../newTypes/CategoryType";

export interface BlogCategoriesPostsProps {
  posts: BlogPostType[];
  category: CategoryType;
}
