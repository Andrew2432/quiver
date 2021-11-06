import Link from "next/link";
import * as React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ThemeContext from "../../utils/ThemeContext";
import BlogPosts from "../blogPosts/BlogPosts";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import { BlogSearchResultsProps } from "./BlogSearchResultsProps";

const { useContext } = React;

function SearchResults({ posts }: BlogSearchResultsProps) {
  return (
    <Container className={`my-3`}>
      <Row>
        <Col lg={8} sm={12}>
          <BlogPosts posts={posts} />
        </Col>
        <Col lg={4} sm={12}>
          <BlogSidebar />
        </Col>
      </Row>
    </Container>
  );
}

function BackToBlogButton() {
  return (
    <Link href="/blog" passHref>
      <Button variant="primary">Back to blog posts</Button>
    </Link>
  );
}

function BlogSearchResults({
  posts,
  query,
}: BlogSearchResultsProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const count = posts.length;
  const resultsMessage =
    count > 0
      ? `Showing ${count} results for query: ${query}`
      : `No results found for query: ${query}`;

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>Search Results</strong>
          </h1>
          <p>{resultsMessage}</p>
          {count == 0 && <BackToBlogButton />}
        </Container>
      </Jumbotron>
      {count > 0 && <SearchResults posts={posts} />}
    </>
  );
}

export default BlogSearchResults;
