export interface Comment {
  id: number;
  post: number;
  parent: number;
  author: number;
  author_name: string;
  author_url: string;
  date: string;
  date_gmt: string;
  content: {
    rendered: string;
  };
  link: string;
  status: string;
  type: string;
  author_avatar_urls: {
    "24": string;
    "48": string;
    "96": string;
  };
  meta: string[];
  _links: {
    self: [{ href: string }];
    collection: [{ href: string }];
    up: [{ embeddable: boolean; post_type: string; href: string }];
  };
}

export interface AddCommentProps {
  name: string;
  email: string;
  comment: string;
  messageType?: string;
  messageText?: string;
  reCAPTCHA?: string;
}
