export interface BlogProps {
  posts: BlogPost[];
}

export interface BlogPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  next: PrevNextPost | null;
  previous: PrevNextPost | null;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: unknown[];
  categories: number[];
  tags: number[];
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    replies: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    'version-history': [
      {
        count: number;
        href: string;
      }
    ];
    'predecessor-version': [
      {
        id: number;
        href: string;
      }
    ];
    'wp:featuredmedia': [
      {
        embeddable: true;
        href: string;
      }
    ];
    'wp:attachment': [
      {
        href: string;
      }
    ];
    'wp:term': [
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
  _embedded: BlogPostEmbeddedProps;
}

interface BlogPostEmbeddedProps {
  author: [
    {
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: {
        '24': string;
        '48': string;
        '96': string;
      };
      _links: [
        {
          self: [
            {
              href: string;
            }
          ];
          collection: [{ href: string }];
        }
      ];
    }
  ];
  'wp:featuredmedia': [
    {
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: {
        rendered: string;
      };
      author: number;
      caption: {
        rendered: string;
      };
      alt_text: string;
      media_type: string;
      mime_type: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes: {
          medium: BlogImageSizes;
          large: BlogImageSizes;
          thumbnail: BlogImageSizes;
          medium_large: BlogImageSizes;
          '1536x1536': BlogImageSizes;
          full: BlogImageSizes;
        };
        image_meta: {
          aperture: string;
          credit: string;
          camera: string;
          caption: string;
          created_timestamp: string;
          copyright: string;
          focal_length: string;
          iso: string;
          shutter_speed: string;
          title: string;
          orientation: string;
          keywords: string[];
        };
      };
      source_url: string;
      _links: {
        self: [{ href: string }];
        collection: [{ href: string }];
        about: [{ href: string }];
        author: [
          {
            embeddable: boolean;
            href: string;
          }
        ];
        replies: [
          {
            embeddable: boolean;
            href: string;
          }
        ];
      };
    }
  ];

  'wp:term': [
    [
      {
        id: number;
        link: string;
        name: string;
        slug: string;
        taxonomy: string;
        _links: {
          self: [{ href: string }];
          collection: [{ href: string }];
          about: [{ href: string }];
          'wp:post_type': [
            {
              href: string;
            }
          ];
          curies: [
            {
              name: string;
              href: string;
              templated: boolean;
            }
          ];
        };
      }
    ]
  ];
}

interface PrevNextPost {
  id: number;
  slug: string;
  title: string;
}

interface BlogImageSizes {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}
