import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';

import {
  CustomPaginationProps,
  PaginationProps,
} from '../../../types/PaginationProps';
import { Comment } from '../../../types/CommentProps';
import useComments from '../../../utils/hooks/useComments';
import CustomPagination from '../pagination/CustomPagination';
import convertTimeFromNow from '../../../utils/convertTimeFromNow';

interface Props {
  id: string;
}

interface SingleCommentProps {
  comment: Comment;
}

const { useRef } = React;

function SingleComment({ comment }: SingleCommentProps) {
  return (
    <div>
      <Row className={`my-3`}>
        <Col lg={1} xs={3}>
          <img
            src={comment.author_avatar_urls[96]}
            alt={comment.author_name}
            className={`img-fluid`}
          />
        </Col>
        <Col lg={3} xs={9}>
          <div className={`d-flex flex-column`}>
            <h4 className={`ml-2`}>
              <strong>{comment.author_name}</strong>
            </h4>
            <p className={`ml-2`}>{` ${convertTimeFromNow(
              comment.date_gmt,
            )}`}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8} sm={12}>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Source Sans Pro' }}>
            {parse(comment.content.rendered)}
          </p>
        </Col>
      </Row>
    </div>
  );
}

function DisplayComments({ id }: Props): JSX.Element {
  const perPage = 10;
  const pageRef = useRef<PaginationProps>({
    previousPage: 1,
    currentPage: 1,
    nextPage: 1,
    totalPages: 1,
  });

  const {
    data: commentsData,
    isLoading,
    mutate,
  } = useComments(id, pageRef.current.currentPage, perPage);

  if (isLoading) return <h1>Loading...</h1>;

  const { data, headers } = commentsData;

  const comments = data as Comment[];
  const totalComments = parseInt(headers['x-wp-total']);
  const totalCommentsPages = parseInt(headers['x-wp-totalpages']);

  const customPaginationProps: CustomPaginationProps = {
    pageRef,
    mutate,
    totalItems: totalComments,
    totalItemsPages: totalCommentsPages,
    perPage,
  };

  return (
    <Container className={`my-2`}>
      <Row className={`justify-content-between`}>
        <Col>
          <h1>
            <strong>Comments ({totalComments})</strong>
          </h1>
        </Col>
      </Row>
      {comments.length ? (
        React.Children.toArray(
          comments.map((comment) => <SingleComment comment={comment} />),
        )
      ) : (
        <p>Be the first to leave a comment.</p>
      )}
      <CustomPagination {...customPaginationProps} />
      <hr />
    </Container>
  );
}

export default DisplayComments;
