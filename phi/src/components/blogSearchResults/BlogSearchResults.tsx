import Link from "next/link";
import * as React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ThemeContext from "../../utils/ThemeContext";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import GenericBlogPosts from "../genericBlogPosts/GenericBlogPosts";
import {
  BlogSearchResultsProps,
  SearchResultsProps,
} from "./BlogSearchResultsProps";

const { useContext } = React;

function SearchResults({ posts }: SearchResultsProps) {
  return (
    <Row>
      <Col lg={8} sm={12}>
        <GenericBlogPosts posts={posts} />
      </Col>
      <Col lg={4} sm={12}>
        <BlogSidebar />
      </Col>
    </Row>
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
  totalItems,
  children,
}: BlogSearchResultsProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const resultsMessage =
    totalItems > 0
      ? `Showing ${totalItems} results for query: ${query}`
      : `No results found for query: ${query}`;

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>Search Results</strong>
          </h1>
          <p>{resultsMessage}</p>
          {totalItems == 0 && <BackToBlogButton />}
        </Container>
      </Jumbotron>
      {totalItems > 0 && (
        <Container className={`my-3`}>
          <SearchResults posts={posts} />
          {children}
        </Container>
      )}
    </>
  );
}

export default BlogSearchResults;
