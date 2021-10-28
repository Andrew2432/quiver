import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import fetcher from '../../utils/fetcher';
import ThemeContext, { ThemeProps } from '../../utils/ThemeContext';
import { Category } from '../../types/CategoryProps';
import { BlogPost } from '../../types/BlogProps';

const { useContext, useState } = React;

const {
  publicRuntimeConfig: { wp_api_url },
} = getConfig();

interface BlogCategoriesListProps {
  theme: ThemeProps['theme'];
}

interface BlogLatestPostsProps {
  theme: ThemeProps['theme'];
}

interface BlogSearchProps {
  theme: ThemeProps['theme'];
}

function BlogSearch({ theme }: BlogSearchProps): JSX.Element {
  const [formFields, setFormFields] = useState({
    query: '',
    isSubmitting: false,
  });
  const router = useRouter();

  const { query, isSubmitting } = formFields;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    router.push(`/blog/search?query=${query}`);
  }

  return (
    <Card bg={theme} className={`my-5`}>
      <Card.Header>
        <Card.Title>
          <h2>
            <u>
              <strong>Search this blog</strong>
            </u>
          </h2>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className={`input-group-append`}>
            <Form.Control
              type="text"
              name="query"
              placeholder="Enter some keywords"
              value={query}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`input-group-append`}
            />
            <Button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

function BlogCategoriesList({ theme }: BlogCategoriesListProps): JSX.Element {
  const { data } = useSWR(`${wp_api_url}/categories`, fetcher);

  if (!data) return <h1>Loading...</h1>;

  return (
    <Card bg={theme}>
      <Card.Header>
        <Card.Title>
          <h2>
            <strong>
              <u>Categories</u>
            </strong>
          </h2>
        </Card.Title>
      </Card.Header>
      <Card.Body className={`d-flex flex-wrap`}>
        {React.Children.toArray(
          (data.data as Category[]).map((category) => (
            <h4 className={`px-2`}>
              <Link href={`/blog/categories/${category.slug}`} passHref>
                <Badge
                  pill
                  variant="secondary"
                  className={`px-3 py-2`}
                  style={{ cursor: 'pointer' }}
                >
                  {category.name}
                </Badge>
              </Link>
            </h4>
          )),
        )}
      </Card.Body>
    </Card>
  );
}

function BlogLatestPosts({ theme }: BlogLatestPostsProps): JSX.Element {
  const { data } = useSWR(
    `${wp_api_url}/posts?_embed&page=1&per_page=5`,
    fetcher,
  );

  if (!data) return <h1>Loading...</h1>;

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
            <ul>
              {React.Children.toArray(
                (data.data as BlogPost[]).map((post, index) => (
                  <Link href={`/blog/post/${post.slug}`} key={index} passHref>
                    <li className={`my-2`} style={{ cursor: 'pointer' }}>
                      <h5>
                        <u>{post.title.rendered}</u>
                      </h5>
                    </li>
                  </Link>
                )),
              )}
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

function BlogSidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <BlogSearch theme={theme} />
      {/* <BlogLatestPosts theme={theme} /> */}
      <BlogCategoriesList theme={theme} />
    </>
  );
}

export default BlogSidebar;
