import { useCategoriesQuery } from '@quiver/graphql-client';
import { CategoryType } from '@quiver/types';
import Link from 'next/link';
import { Children } from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { BlogCategoriesListProps } from './BlogCategoriesListProps';

function createCategories(category: CategoryType) {
  return (
    <h4 className={`px-2`}>
      <Link href={`/blog/categories/${category.slug}`} passHref>
        <Badge
          pill
          variant="secondary"
          className={`px-3 py-2`}
          style={{ cursor: 'pointer' }}
        >
          {category.name}
        </Badge>
      </Link>
    </h4>
  );
}

function BlogCategoriesList({ theme }: BlogCategoriesListProps): JSX.Element {
  const { data, loading, error } = useCategoriesQuery();

  if (loading) return <h1>Loading...</h1>;

  const categories = (data?.categories ?? []) as CategoryType[];

  return (
    <Card bg={theme}>
      <Card.Header>
        <Card.Title>
          <h2>
            <strong>
              <u>Categories</u>
            </strong>
          </h2>
        </Card.Title>
      </Card.Header>
      <Card.Body className={`d-flex flex-wrap`}>
        {Children.toArray(categories.map(createCategories))}
      </Card.Body>
    </Card>
  );
}

export default BlogCategoriesList;
