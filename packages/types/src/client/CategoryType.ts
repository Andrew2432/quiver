import { Category } from "@quiver/graphql-client";

// @ts-ignore
interface GenericCategory<T> {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface CategoryType extends Readonly<GenericCategory<Category>> {}
