import { BlogPostType } from "../../newTypes/BlogPostType";
import { ThemeProps } from "../../utils/ThemeContext";

export interface BlogSinglePostProps {
  post: BlogPostType;
  theme?: ThemeProps["theme"];
}
