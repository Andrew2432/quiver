import { Category } from "../generated/graphql";

interface GenericCategory<T> {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryType extends Readonly<GenericCategory<Category>> {}
