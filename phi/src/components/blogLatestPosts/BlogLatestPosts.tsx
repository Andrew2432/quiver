import Link from "next/link";
import { Children } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useBlogLatestPostsQuery } from "../../generated/graphql";
import { BlogPostType } from "../../newTypes/BlogPostType";
import { BlogLatestPostsProps } from "./BlogLatestPostsProps";

function createLatestPosts(post: BlogPostType) {
  return (
    <Link href={`/blog/post/${post.slug}`} passHref>
      <li className={`my-2`} style={{ cursor: "pointer" }}>
        <h5>
          <u>{post.title}</u>
        </h5>
      </li>
    </Link>
  );
}

function BlogLatestPosts({ theme }: BlogLatestPostsProps): JSX.Element {
  const { data, loading, error } = useBlogLatestPostsQuery({
    variables: {
      sortString: `created_at:desc`,
      limit: 3,
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
                  <u>Latest Posts</u>
                </strong>
              </h2>
            </Card.Title>
          </Card.Header>
          <Card.Body className={`mx-3`}>
            <ul>{Children.toArray(posts.map(createLatestPosts))}</ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BlogLatestPosts;
