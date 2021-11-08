import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ThemeContext from "../../utils/ThemeContext";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import GenericBlogPosts from "../genericBlogPosts/GenericBlogPosts";
import { BlogProps } from "./BlogProps";

const { useContext } = React;

function Blog({ posts, children }: BlogProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>My Blog</strong>
          </h1>
          <p>Read my latest posts.</p>
        </Container>
      </Jumbotron>
      <Container className={`my-3`}>
        <Row>
          <Col lg={8} sm={12}>
            <GenericBlogPosts posts={posts} />
          </Col>
          <Col lg={4} sm={12}>
            <BlogSidebar />
          </Col>
        </Row>
        {children}
      </Container>
    </>
  );
}

export default Blog;
