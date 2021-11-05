import {
  faCalendarAlt,
  faTags,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useBlogPostsQuery } from "../../generated/graphql";
import { BlogPostType } from "../../newTypes/BlogPostType";
import ThemeContext from "../../utils/ThemeContext";
import { BlogPostCardProps } from "./BlogPostsProps";

const { useRef, useContext } = React;

function BlogPostCard({ post }: BlogPostCardProps) {
  const { theme } = useContext(ThemeContext);
  const strapiUrl = process.env["NEXT_PUBLIC_STRAPI_URL"];

  return (
    <Card
      className={`my-5`}
      bg={theme}
      text={theme === "light" ? "dark" : "light"}
    >
      {post.image && (
        <Card.Img variant="top" src={`${strapiUrl}${post.image.url}`} />
      )}
      <Card.Body>
        <Card.Title>
          <h3>
            <strong>{post.title}</strong>
          </h3>
        </Card.Title>
        <div
          className={`d-flex flex-lg-row flex-sm-column flex-wrap align-items-center justify-content-evenly border-light py-2`}
        >
          <h4 className={`px-2`}>
            <Badge pill variant="primary" className={`px-3 py-2`}>
              <FontAwesomeIcon icon={faUser} className={`ml-1 mr-2`} />
              {post.author.name}
            </Badge>
          </h4>
          {React.Children.toArray(
            <h4 className={`px-2`}>
              <Link href={`/blog/categories/${post.category.slug}`} passHref>
                <Badge
                  pill
                  variant="info"
                  className={`px-3 py-2`}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faTags} className={`ml-1 mr-2`} />
                  {post.category.name}
                </Badge>
              </Link>
            </h4>
          )}
          <h4 className={`px-2`}>
            <Badge pill variant="secondary" className={`px-3 py-2`}>
              <FontAwesomeIcon icon={faCalendarAlt} className={`ml-1 mr-2`} />
              {new Date(post.created_at).toLocaleString("en-IN", {
                year: "numeric",
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </Badge>
          </h4>
        </div>
        <hr className={`border-${theme === "light" ? "dark" : "light"}`} />
        <Card.Text>
          <p style={{ fontSize: "1.5rem", fontFamily: "Source Sans Pro" }}>
            {post.excerpt}
          </p>
        </Card.Text>
        <Link href={`/blog/posts/${post.slug}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function BlogPosts() {
  const { data, loading, error } = useBlogPostsQuery();

  if (loading) return null;

  if (error) console.error(error);

  if (typeof data?.articles === "undefined") {
    return null;
  }

  const posts = data.articles as BlogPostType[];

  return (
    <>
      {React.Children.toArray(
        posts.map((post) => <BlogPostCard post={post} />)
      )}
      {/* <CustomPagination {...customPaginationProps} /> */}
    </>
  );
}

export default BlogPosts;
