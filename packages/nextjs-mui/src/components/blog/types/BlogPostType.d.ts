import { Article } from '../../../generated/graphql';

interface GenericBlogPostType<T> {
  id: string;
  title: string;
  content: string;
}

export interface BlogPostType extends Readonly<GenericBlogPostType<Article>> {}
