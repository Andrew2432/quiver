import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import * as React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { BlogSearchProps } from "./BlogSearchProps";

function BlogSearch({ theme }: BlogSearchProps): JSX.Element {
  const [formFields, setFormFields] = useState({
    query: "",
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

export default BlogSearch;
