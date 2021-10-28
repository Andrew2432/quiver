import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarAlt,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

import { BlogPost } from '../../types/BlogProps';
import PostComment from '../shared/comments/PostComment';
import DisplayComments from '../shared/comments/DisplayComments';
import Divider from '../shared/divider/Divider';
import useBreakpoint from '../../utils/hooks/useBreakpoint';
import ThemeContext, { ThemeProps } from '../../utils/ThemeContext';
import usePrismHighlight from '../../utils/hooks/usePrismHighlight';

interface Props {
  post: BlogPost;
}

interface PostProps {
  post: BlogPost;
  theme: ThemeProps['theme'];
}

const { useContext, useEffect } = React;

function Post({ post, theme }: PostProps): JSX.Element {
  return (
    <Container className={`my-5`}>
      <Card bg={theme} text={theme === 'light' ? 'dark' : 'light'}>
        <Card.Header>
          <Card.Title>
            <h1>
              <strong>{parse(post.title.rendered)}</strong>
            </h1>
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
            <h4 className={`px-2`}>
              <Link
                href={`/blog/categories/${post._embedded['wp:term'][0][0].slug}`}
                passHref
              >
                <Badge
                  pill
                  variant="info"
                  className={`px-3 py-2`}
                  style={{ cursor: 'pointer' }}
                >
                  <FontAwesomeIcon icon={faTags} className={`ml-1 mr-2`} />
                  {post._embedded['wp:term'][0][0].name}
                </Badge>
              </Link>
            </h4>
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
        </Card.Header>
        <Divider />
        <Card.Body>
          <Card.Text>
            <p style={{ fontSize: '1.5rem', fontFamily: 'Source Sans Pro' }}>
              {parse(post.content.rendered)}
            </p>
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

function SinglePost({ post }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const breakpoint = useBreakpoint();

  const postId = post.id.toString();

  usePrismHighlight();

  return (
    <>
      <Head>
        {post._embedded['wp:featuredmedia'] && (
          <meta
            property="og:image"
            content={
              post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                .source_url
            }
            key="og:image"
          />
        )}
      </Head>
      <Container fluid={breakpoint === 'xs' ? true : false}>
        <Post post={post} theme={theme} />
        <Divider />
        <PostComment id={postId} />
        <Divider />
        <DisplayComments id={postId} />
      </Container>
    </>
  );
}

export default SinglePost;
