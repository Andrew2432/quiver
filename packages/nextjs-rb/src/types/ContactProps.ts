export interface ContactFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  messageText?: string;
  messageType?: string;
  reCAPTCHA?: string;
}
