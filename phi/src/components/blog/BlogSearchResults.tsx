import * as React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogSidebar from './BlogSidebar';
import ThemeContext from '../../utils/ThemeContext';
import BlogSearchResultsPosts from './BlogSearchResultsPosts';

const { useContext } = React;

interface Props {
  query: string;
}

function BlogSearchResults({ query }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>Search Results</strong>
          </h1>
          <p>Displaying posts that matches the query: &quot;{query}&quot;</p>
        </Container>
      </Jumbotron>
      <Container className={`my-3`}>
        <Row>
          <Col lg={8} sm={12}>
            <BlogSearchResultsPosts query={query} />
          </Col>
          <Col lg={4} sm={12}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogSearchResults;
