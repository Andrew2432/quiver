import { Article } from '../generated/graphql';
import { AuthorType } from './AuthorType';
import { CategoryType } from './CategoryType';
import { ImageType } from './ImageType';

interface GenericBlogPost<T> {
  id: string;
  slug: string;
  image: ImageType;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: AuthorType;
  category: CategoryType;
  previous: T;
  next: T;
  views: string;
  hits: string;
}

export interface BlogPostType extends Readonly<GenericBlogPost<Article>> {}
