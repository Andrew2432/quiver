import Link from 'next/link';
import parse from 'html-react-parser';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { BlogPost } from '../../types/BlogProps';
import { ThemeProps } from '../../utils/ThemeContext';
import convertTimeFromNow from '../../utils/convertTimeFromNow';

interface HomeBlogPostProps {
  post: BlogPost;
  theme: ThemeProps['theme'];
}

function HomeBlogPost({ post, theme }: HomeBlogPostProps) {
  return (
    <Col sm={12} lg={4} className={`my-3`}>
      <Card
        className={`border border-${
          theme === 'dark' ? 'light' : 'dark'
        } rounded-3 bg-${theme} h-100`}
      >
        {post._embedded['wp:featuredmedia'] && (
          <Card.Img
            src={
              post._embedded['wp:featuredmedia'][0].media_details.sizes
                .thumbnail.source_url
            }
            alt={post._embedded['wp:featuredmedia'][0].caption.rendered}
            height={280}
          />
        )}
        <Card.Header>
          <Card.Title>
            <h4>
              <strong>{parse(post.title.rendered)}</strong>
            </h4>
          </Card.Title>
          <Card.Subtitle>
            <h6>Posted {convertTimeFromNow(post.date_gmt)}</h6>
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>{parse(post.excerpt.rendered)}</Card.Body>
        <Card.Footer>
          <Link href={`/blog/posts/${post.slug}`}>
            <Button variant={`outline-${theme === 'dark' ? 'light' : 'dark'}`}>
              Read more
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default HomeBlogPost;
