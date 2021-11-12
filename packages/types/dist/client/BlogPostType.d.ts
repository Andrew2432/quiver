import { Article } from "@quiver/graphql-client";
import { AuthorType } from "./AuthorType";
import { CategoryType } from "./CategoryType";
import { ImageType } from "./ImageType";
interface GenericBlogPost<T> {
    id: string;
    slug: string;
    image: Readonly<ImageType>;
    title: string;
    description: string;
    excerpt: string;
    content: string;
    created_at: string;
    updated_at: string;
    author: Readonly<AuthorType>;
    category: Readonly<CategoryType>;
    previous: T;
    next: T;
    views: string;
    hits: string;
}
export interface BlogPostType extends Readonly<GenericBlogPost<Article>> {
}
export {};
