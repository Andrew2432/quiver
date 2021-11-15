import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useBreakpoint from '../../utils/hooks/useBreakpoint';
import usePrismHighlight from '../../utils/hooks/usePrismHighlight';
import ThemeContext from '../../utils/ThemeContext';
import AuthorBadge from '../AuthorBadge';
import CategoryBadge from '../CategoryBadge';
import DateBadge from '../DateBadge';
import MDXRenderer from '../mdxRenderer/MDXRenderer';
import Divider from '../shared/divider/Divider';
import { BlogSinglePostProps } from './BlogSinglePostProps';

const { useContext } = React;

function SinglePost({ post, theme }: BlogSinglePostProps): JSX.Element {
  const { title, author, category, created_at, content } = post;

  return (
    <Container className={`my-5`}>
      <Card bg={theme} text={theme === 'light' ? 'dark' : 'light'}>
        <Card.Header>
          <Card.Title>
            <h1>
              <strong>{title}</strong>
            </h1>
          </Card.Title>
          <div
            className={`d-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-evenly border-light py-2`}
          >
            <AuthorBadge author={author} />
            <CategoryBadge category={category} />
            <DateBadge date={created_at} />
          </div>
        </Card.Header>
        <Divider />
        <Card.Body>
          <Card.Text as="div">
            <MDXRenderer content={content} />
          </Card.Text>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Row className={`justify-content-between`}>
            <Col>
              {post.previous && (
                <div>
                  <h4>Previous Post:</h4>
                  <Link href={`/blog/posts/${post.previous.slug}`} passHref>
                    {post.previous.title}
                  </Link>
                </div>
              )}
            </Col>
            <Col>
              {post.next && (
                <div className={`text-right`}>
                  <h4>Next Post:</h4>
                  <Link href={`/blog/posts/${post.next.slug}`} passHref>
                    {post.next.title}
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
}

function BlogSinglePost({ post }: BlogSinglePostProps): JSX.Element {
  const breakpoint = useBreakpoint();
  const { theme } = useContext(ThemeContext);

  // const postId = post.id.toString();

  usePrismHighlight();

  return (
    <>
      <Head>
        {/* {post._embedded["wp:featuredmedia"] && (
          <meta
            property="og:image"
            content={
              post._embedded["wp:featuredmedia"][0].media_details.sizes.medium
                .source_url
            }
            key="og:image"
          />
        )} */}
      </Head>
      <Container fluid={breakpoint === 'xs' ? true : false}>
        <SinglePost post={post} theme={theme} />
        {/* <Divider />
        <PostComment id={postId} />
        <Divider />
        <DisplayComments id={postId} /> */}
      </Container>
    </>
  );
}

export default BlogSinglePost;
