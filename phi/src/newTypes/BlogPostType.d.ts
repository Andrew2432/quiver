import { Article } from "../generated/graphql";
import { AuthorType } from "./AuthorType";

interface GenericBlogPost<T> {
  id: string;
  title: string;
  description: string;
  author: AuthorType;
  created_at: string;
  updated_at: string;
  content: string;
}

export interface BlogPostType extends Readonly<GenericBlogPost<Article>> {}
