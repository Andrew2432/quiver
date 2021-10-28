import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';

import { ContactFormFields } from '../../types/ContactProps';

interface Props {
  initialValues: ContactFormFields;
  onSubmit: (
    values: ContactFormFields,
    helpers: FormikHelpers<ContactFormFields>
  ) => Promise<void>;
  validate: (values: ContactFormFields) => FormikErrors<ContactFormFields>;
}

const { useRef } = React;

function ContactForm({
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
          values: {
            name,
            email,
            subject,
            message,
            messageText,
            messageType,
            reCAPTCHA,
          },
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

              <Form.Group controlId="formBasicSubject">
                <Form.Label>
                  <strong>Subject</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  isInvalid={typeof errors.subject !== 'undefined'}
                  isValid={errors.subject === ''}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subject}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>
                  <strong>Message</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Enter message"
                  value={message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  isInvalid={typeof errors.message !== 'undefined'}
                  isValid={errors.message === ''}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
                <Form.Text>
                  Kindly use this form only for unofficial purposes. You can
                  also contact me through mediums in footer.
                </Form.Text>
              </Form.Group>

              <h5 className={`mt-4`}>
                By submitting this form, you agree to get messages from me in
                the future.
              </h5>

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

export default ContactForm;
