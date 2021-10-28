import * as React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BlogPosts from "./BlogPosts";
import BlogSidebar from "./BlogSidebar";
import ThemeContext from "../../utils/ThemeContext";

const { useContext } = React;

function Blog(): JSX.Element {
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
            <BlogPosts />
          </Col>
          <Col lg={4} sm={12}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
