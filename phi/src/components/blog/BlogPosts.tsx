import * as React from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTags,
  faUser,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import { BlogPost } from '../../types/BlogProps';
import {
  CustomPaginationProps,
  PaginationProps,
} from '../../types/PaginationProps';
import usePosts from '../../utils/hooks/usePosts';
import CustomPagination from '../shared/pagination/CustomPagination';
import ThemeContext from '../../utils/ThemeContext';

const { useRef, useContext } = React;

interface BlogPostCardProps {
  post: BlogPost;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <Card
      className={`my-5`}
      bg={theme}
      text={theme === 'light' ? 'dark' : 'light'}
    >
      {post._embedded['wp:featuredmedia'] && (
        <Card.Img
          variant="top"
          src={
            post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
              .source_url ||
            post._embedded['wp:featuredmedia'][0].media_details.sizes.large
              .source_url
          }
          style={{
            height: '400px',
          }}
        />
      )}
      <Card.Body>
        <Card.Title>
          <h3>
            <strong>{parse(post.title.rendered)}</strong>
          </h3>
        </Card.Title>
        <div
          className={`d-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-evenly border-light py-2`}
        >
          <h4 className={`px-2`}>
            <Badge pill variant="primary" className={`px-3 py-2`}>
              <FontAwesomeIcon icon={faUser} className={`ml-1 mr-2`} />
              {post._embedded.author[0].name}
            </Badge>
          </h4>
          {React.Children.toArray(
            post._embedded['wp:term'][0].map((category, index) => (
              <h4 className={`px-2`} key={index}>
                <Link href={`/blog/categories/${category.slug}`} passHref>
                  <Badge
                    pill
                    variant="info"
                    className={`px-3 py-2`}
                    style={{ cursor: 'pointer' }}
                  >
                    <FontAwesomeIcon icon={faTags} className={`ml-1 mr-2`} />
                    {category.name}
                  </Badge>
                </Link>
              </h4>
            )),
          )}
          <h4 className={`px-2`}>
            <Badge pill variant="secondary" className={`px-3 py-2`}>
              <FontAwesomeIcon icon={faCalendarAlt} className={`ml-1 mr-2`} />
              {new Date(post.date_gmt).toLocaleString('en-IN', {
                year: 'numeric',
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </Badge>
          </h4>
        </div>
        <hr className={`border-${theme === 'light' ? 'dark' : 'light'}`} />
        <Card.Text>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Source Sans Pro' }}>
            {parse(post.excerpt.rendered)}
          </p>
        </Card.Text>
        <Link href={`/blog/posts/${post.slug}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function BlogPosts(): JSX.Element {
  const perPage = 5;
  const pageRef = useRef<PaginationProps>({
    previousPage: 1,
    currentPage: 1,
    nextPage: 1,
    totalPages: 1,
  });

  const {
    data: postsData,
    isLoading,
    mutate,
  } = usePosts(pageRef.current.currentPage, perPage);

  if (isLoading) return <h1>Loading...</h1>;

  const { data, headers } = postsData;

  const posts = data as BlogPost[];
  const totalPosts = parseInt(headers['x-wp-total']);
  const totalPostsPages = parseInt(headers['x-wp-totalpages']);

  const customPaginationProps: CustomPaginationProps = {
    pageRef,
    mutate,
    totalItems: totalPosts,
    totalItemsPages: totalPostsPages,
    perPage,
  };

  return (
    <>
      {React.Children.toArray(
        posts.map((post) => <BlogPostCard post={post} />),
      )}
      <CustomPagination {...customPaginationProps} />
    </>
  );
}

export default BlogPosts;
