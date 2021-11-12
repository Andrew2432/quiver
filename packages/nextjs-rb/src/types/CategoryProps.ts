export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: string[];
  _links: {
    self: [{ href: string }];
    collection: [{ href: string }];
    about: [{ href: string }];
    "wp:post_type": [{ href: string }];
    curies: [{ href: string }];
  };
}
