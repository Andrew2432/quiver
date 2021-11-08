import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ThemeContext from "../../utils/ThemeContext";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import GenericBlogPosts from "../genericBlogPosts/GenericBlogPosts";
import { BlogCategoriesPostsProps } from "./BlogCategoriesPostsProps";

const { useContext } = React;

function BlogCategoriesPosts({
  posts,
  category,
  children,
  totalItems,
}: BlogCategoriesPostsProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>Category: {category.name}</strong>
          </h1>
          <p>
            Showing {totalItems} posts about {category.name}
          </p>
          <p>{category.description}</p>
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

export default BlogCategoriesPosts;
