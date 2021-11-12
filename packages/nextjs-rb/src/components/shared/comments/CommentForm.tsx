import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';

import { AddCommentProps } from '../../../types/CommentProps';

interface Props {
  initialValues: AddCommentProps;
  onSubmit: (
    values: AddCommentProps,
    helpers: FormikHelpers<AddCommentProps>
  ) => Promise<void>;
  validate: (values: AddCommentProps) => FormikErrors<AddCommentProps>;
}

const { useRef } = React;

function CommentForm({
  initialValues,
  validate,
  onSubmit,
}: Props): JSX.Element {
  const reCAPTCHARef = useRef<ReCAPTCHA>(null);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(props) => {
        const {
          values: { name, email, comment, messageText, messageType, reCAPTCHA },
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          setFieldValue,
        } = props;

        const handleBlur = (e: any) => {
          if (!reCAPTCHA) {
            (reCAPTCHARef.current as any).execute();
          }
          props.handleBlur(e);
        };

        return (
          <Row className={`p-2`}>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>
                  <strong>Name</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  isInvalid={typeof errors.name !== 'undefined'}
                  isValid={errors.name === ''}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  isInvalid={typeof errors.email !== 'undefined'}
                  isValid={errors.email === ''}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>
                  <strong>Comment</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="comment"
                  placeholder="Enter your comment"
                  value={comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  isInvalid={typeof errors.comment !== 'undefined'}
                  isValid={errors.comment === ''}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.comment}
                </Form.Control.Feedback>
                <Form.Text>
                  Please be civil in your response. Comments that are spam in
                  nature will be moderated.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              <h3 className={`text-${messageType as string} my-3`}>
                {messageText as string}
              </h3>
              <h3 className={`text-warning`}>{errors.reCAPTCHA}</h3>
              <ReCAPTCHA
                ref={reCAPTCHARef}
                sitekey={process.env.NEXT_PUBLIC_GRC_SITE_KEY as string}
                size="invisible"
                onChange={(value) => {
                  setFieldValue('reCAPTCHA', value);
                }}
              />
            </Form>
          </Row>
        );
      }}
    </Formik>
  );
}

export default CommentForm;
