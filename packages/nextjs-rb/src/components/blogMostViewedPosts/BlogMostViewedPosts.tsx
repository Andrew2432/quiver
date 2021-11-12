import Link from 'next/link';
import { Children } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useBlogCustomSortedPostsQuery } from '../../generated/graphql';
import { BlogPostType } from '../../newTypes/BlogPostType';
import useAuthorSlug from '../../utils/hooks/useAuthorSlug.hook';
import { BlogMostViewedPostsProps } from './BlogMostViewedPostsProps';

function createMostViewedPosts(post: BlogPostType) {
  return (
    <Link href={`/blog/posts/${post.slug}`} passHref>
      <li className={`my-2`} style={{ cursor: 'pointer' }}>
        <h5>
          <u>{post.title}</u>
        </h5>
      </li>
    </Link>
  );
}

function BlogMostViewedPosts({ theme }: BlogMostViewedPostsProps): JSX.Element {
  const authorSlug = useAuthorSlug();

  const { data, loading, error } = useBlogCustomSortedPostsQuery({
    variables: {
      sortString: `views:desc`,
      limit: 3,
      authorSlug,
    },
  });

  if (loading) return <h1>Loading...</h1>;

  const posts = (data?.articles ?? []) as BlogPostType[];

  return (
    <Row className={`my-5`}>
      <Col>
        <Card bg={theme}>
          <Card.Header>
            <Card.Title>
              <h2>
                <strong>
                  <u>Most Viewed Posts</u>
                </strong>
              </h2>
            </Card.Title>
          </Card.Header>
          <Card.Body className={`mx-3`}>
            <ul>{Children.toArray(posts.map(createMostViewedPosts))}</ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BlogMostViewedPosts;
