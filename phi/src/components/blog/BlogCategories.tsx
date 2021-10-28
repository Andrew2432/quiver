import * as React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BlogSidebar from "./BlogSidebar";
import ThemeContext from "../../utils/ThemeContext";
import BlogCategoriesPosts from "./BlogCategoriesPosts";
import { Category } from "../../types/CategoryProps";

const { useContext } = React;

interface Props {
  slug: string;
  category: Category;
}

function BlogCategories({ slug, category }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>Category: {category.name}</strong>
          </h1>
          <p>{category.description}</p>
        </Container>
      </Jumbotron>
      <Container className={`my-3`}>
        <Row>
          <Col lg={8} sm={12}>
            <BlogCategoriesPosts slug={slug} />
          </Col>
          <Col lg={4} sm={12}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogCategories;