import getConfig from 'next/config';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormikHelpers, FormikErrors } from 'formik';
import axios from 'axios';

import { ContactFormFields } from '../../types/ContactProps';
import ContactForm from './ContactForm';

const {
  publicRuntimeConfig: { wp_contact_url, author_email },
} = getConfig();

const initialValues: ContactFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
  messageType: '',
  messageText: '',
  reCAPTCHA: '',
};

function Contact() {
  function validate({
    name,
    email,
    subject,
    message,
    reCAPTCHA,
  }: ContactFormFields): FormikErrors<ContactFormFields> {
    const errors: Partial<ContactFormFields> = {};

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

    if (!subject.length) {
      errors.subject = 'Subject is required';
    }

    if (!message.length || message.length < 19) {
      errors.message = 'Message is required (atleast 20 characters).';
    }

    if (!reCAPTCHA?.length) {
      errors.reCAPTCHA = 'Please reload the page and try again';
    }

    return errors;
  }

  async function onSubmit(
    { name, email, subject, message }: ContactFormFields,
    { setSubmitting, setFieldValue }: FormikHelpers<ContactFormFields>,
  ): Promise<void> {
    try {
      setSubmitting(true);
      setFieldValue('messageType', 'info');
      setFieldValue('messageText', 'Submitting...');

      const formData = new FormData();
      formData.append('your-name', name);
      formData.append('your-email', email);
      formData.append('your-subject', subject);
      formData.append('your-message', message);

      await axios.post(`${wp_contact_url}`, formData);

      setSubmitting(false);

      setFieldValue('messageType', 'success');
      setFieldValue('messageText', 'Submitted successfully');
    } catch (error) {
      setSubmitting(false);

      setFieldValue('messageType', 'danger');
      setFieldValue('messageText', 'An error occurred');
    }
  }

  return (
    <Container className={`my-3 `}>
      <Row>
        <Col>
          <h1 className={`text-center`}>
            <strong>Contact Me</strong>
          </h1>
          <h4 className={`text-center`}>
            We can do wonders! Get in touch with me and let's get started!
          </h4>
        </Col>
      </Row>
      <Row className={`align-items-center justify-content-center`}>
        <Col sm={10} lg={8}>
          <div className={`my-5 mx-auto`}>
            <ContactForm
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
