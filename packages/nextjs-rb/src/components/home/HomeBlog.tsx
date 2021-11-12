import * as React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { BlogPost } from '../../types/BlogProps';
import { ThemeProps } from '../../utils/ThemeContext';
import HomeBlogPost from './HomeBlogPost';

interface HomeBlogProps {
  theme: ThemeProps['theme'];
  posts: BlogPost[];
}

function HomeBlog({ theme, posts }: HomeBlogProps) {
  const bg = `bg-${theme}`;

  return (
    <section>
      <Container className={`${bg} my-5 p-2 text-center`}>
        <Row className={`my-2`}>
          <Col>
            <h2>
              <strong>My Latest Posts</strong>
            </h2>
          </Col>
        </Row>
        <Row className={`my-2`}>
          <Col>
            <h5>
              Fresh posts, from yours' faithful <span>😉</span>
            </h5>
          </Col>
        </Row>
        <Row className={`my-2`}>
          {React.Children.toArray(
            posts.map((post) => <HomeBlogPost post={post} theme={theme} />),
          )}
        </Row>
      </Container>
      <Container className={`my-2 ${bg}`}>
        <Row
          className={`align-items-center justify-content-center text-center`}
        >
          <Col lg={5} sm={12} className={`my-3`}>
            <h4>Btw, I write some more stuff</h4>
          </Col>
          <Col lg={3} sm={12} className={`my-3`}>
            <Link href={`/blog`}>
              <Button>Let's see</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeBlog;
