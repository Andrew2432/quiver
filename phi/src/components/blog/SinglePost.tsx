import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { BlogPostType } from "../../newTypes/BlogPostType";
import useBreakpoint from "../../utils/hooks/useBreakpoint";
import usePrismHighlight from "../../utils/hooks/usePrismHighlight";
import ThemeContext, { ThemeProps } from "../../utils/ThemeContext";
import MDXRenderer from "../mdxRenderer/MDXRenderer";
import Divider from "../shared/divider/Divider";

interface Props {
  post: BlogPostType;
}

interface PostProps {
  post: BlogPostType;
  theme: ThemeProps["theme"];
}

const { useContext, useEffect } = React;

function Post({ post, theme }: PostProps): JSX.Element {
  const { title, author, created_at, content } = post;

  return (
    <Container className={`my-5`}>
      <Card bg={theme} text={theme === "light" ? "dark" : "light"}>
        <Card.Header>
          <Card.Title>
            <h1>
              <strong>{title}</strong>
            </h1>
          </Card.Title>
          <div
            className={`d-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-evenly border-light py-2`}
          >
            <h4 className={`px-2`}>
              <Badge pill variant="primary" className={`px-3 py-2`}>
                <FontAwesomeIcon icon={faUser} className={`ml-1 mr-2`} />
                {author.name}
              </Badge>
            </h4>
            {/* <h4 className={`px-2`}>
              <Link
                href={`/blog/categories/${post._embedded["wp:term"][0][0].slug}`}
                passHref
              >
                <Badge
                  pill
                  variant="info"
                  className={`px-3 py-2`}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faTags} className={`ml-1 mr-2`} />
                  {post._embedded["wp:term"][0][0].name}
                </Badge>
              </Link>
            </h4> */}
            <h4 className={`px-2`}>
              <Badge pill variant="secondary" className={`px-3 py-2`}>
                <FontAwesomeIcon icon={faCalendarAlt} className={`ml-1 mr-2`} />
                {new Date(created_at).toLocaleString("en-IN", {
                  year: "numeric",
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </Badge>
            </h4>
          </div>
        </Card.Header>
        <Divider />
        <Card.Body>
          <Card.Text>
            <p style={{ fontSize: "1.5rem", fontFamily: "Source Sans Pro" }}>
              <MDXRenderer content={content} />
            </p>
          </Card.Text>
        </Card.Body>
        <Divider />
        {/* <Card.Footer>
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
        </Card.Footer> */}
      </Card>
    </Container>
  );
}

function SinglePost({ post }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const breakpoint = useBreakpoint();

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
      <Container fluid={breakpoint === "xs" ? true : false}>
        <Post post={post} theme={theme} />
        {/* <Divider />
        <PostComment id={postId} />
        <Divider />
        <DisplayComments id={postId} /> */}
      </Container>
    </>
  );
}

export default SinglePost;
