import Link from 'next/link';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ThemeContext from '../../utils/ThemeContext';
import AuthorBadge from '../AuthorBadge';
import CategoryBadge from '../CategoryBadge';
import DateBadge from '../DateBadge';
import MDXRenderer from '../MDXRenderer';
import { BlogPostCardProps } from './BlogPostCardProps';

const { useContext } = React;

function BlogPostCard({ post }: BlogPostCardProps) {
  const { theme } = useContext(ThemeContext);
  const strapiUrl = process.env['NEXT_PUBLIC_STRAPI_URL'];
  const { title, author, category, created_at, excerpt, slug } = post;

  return (
    <Card
      className={`my-5`}
      bg={theme}
      text={theme === 'light' ? 'dark' : 'light'}
    >
      {post.image && (
        <Card.Img variant="top" src={`${strapiUrl}${post.image.url}`} />
      )}
      <Card.Body as="div">
        <Card.Title as="div">
          <h3>
            <strong>{title}</strong>
          </h3>
        </Card.Title>
        <div
          className={`d-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-evenly border-light py-2`}
        >
          <AuthorBadge author={author} />
          <CategoryBadge category={category} />
          <DateBadge date={created_at} />
        </div>
        <hr className={`border-${theme === 'light' ? 'dark' : 'light'}`} />
        <Card.Text as="div">
          <MDXRenderer content={excerpt} />
        </Card.Text>
        <Link href={`/blog/posts/${slug}`} passHref>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogPostCard;
