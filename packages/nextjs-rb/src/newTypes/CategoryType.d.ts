import { Category } from "../generated/graphql";

interface GenericCategory<T> {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface CategoryType extends Readonly<GenericCategory<Category>> {}
