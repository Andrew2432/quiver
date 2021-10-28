import getConfig from 'next/config';
import Container from 'react-bootstrap/Container';
import { FormikHelpers, FormikErrors } from 'formik';
import axios from 'axios';

import { AddCommentProps } from '../../../types/CommentProps';
import CommentForm from './CommentForm';
import useComments from '../../../utils/hooks/useComments';

const {
  publicRuntimeConfig: { author_email },
} = getConfig();

interface Props {
  id: string;
}

const initialValues: AddCommentProps = {
  name: '',
  email: '',
  comment: '',
  messageType: '',
  messageText: '',
  reCAPTCHA: '',
};

function PostComment({ id }: Props) {
  const { mutate } = useComments(id);

  function validate({
    name,
    email,
    comment,
    reCAPTCHA,
  }: AddCommentProps): FormikErrors<AddCommentProps> {
    const errors: Partial<AddCommentProps> = {};

    if (!name.length) {
      errors.name = 'Name is required';
    }

    if (!email.length) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    } else if (email === author_email) {
      errors.email = 'Invalid email address';
    }

    if (!comment.length) {
      errors.comment = 'Comment is required';
    }

    if (!reCAPTCHA?.length) {
      errors.reCAPTCHA = 'Please try again';
    }

    return errors;
  }

  async function onSubmit(
    { name, email, comment }: AddCommentProps,
    {
      setSubmitting,
      setFieldValue,
      setFieldError,
    }: FormikHelpers<AddCommentProps>,
  ): Promise<void> {
    try {
      setSubmitting(true);
      setFieldValue('messageType', 'info');
      setFieldValue('messageText', 'Submitting...');
      const queryParams = new URLSearchParams();
      queryParams.append('author_name', name);
      queryParams.append('author_email', email);
      queryParams.append('post', id);
      queryParams.append('content', comment);

      await axios.post(
        `${process.env.NEXT_PUBLIC_WP_API_URL as string}/comments`,
        queryParams,
      );

      setSubmitting(false);

      setFieldValue('messageType', 'success');
      setFieldValue('messageText', 'Submitted successfully');

      mutate();
    } catch (error) {
      setSubmitting(false);
      if (error.response.status === 409) {
        setFieldValue('messageType', 'warning');
        setFieldValue(
          'messageText',
          'You have already posted a similar comment',
        );
        setFieldError('comment', 'Similar comment already exists.');
      } else {
        setFieldValue('messageType', 'danger');
        setFieldValue('messageText', 'An error occurred');
        console.error(error);
      }
    }
  }

  return (
    <Container className={`my-3`}>
      <h1>
        <strong>Leave a comment</strong>
      </h1>
      <CommentForm
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default PostComment;
