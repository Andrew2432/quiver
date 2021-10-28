export interface Project {
  project_ID: number;
  project_title: string;
  project_description: string;
  project_slug: string;
  project_is_top: string;
  project_github_link: string;
  project_type: string;
  project_content: string;
  project_client_name: string;
  project_start_date: string;
  project_end_date: string;
  project_url: string;
  project_snapshots: ProjectImage[];
}

interface ProjectImage {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: ImageSizes;
}

interface ImageSizes {
  thumbnail: string;
  'thumbnail-width': number;
  'thumbnail-height': number;

  medium: string;
  'medium-width': number;
  'medium-height': number;

  medium_large: string;
  'medium_large-width': number;
  'medium_large-height': number;

  large: string;
  'large-width': number;
  'large-height': number;

  '1536x1536': string;
  '1536x1536-width': number;
  '1536x1536-height': number;

  '2048x2048': string;
  '2048x2048-width': number;
  '2048x2048-height': number;

  mobileScreen: string;
  'mobileScreen-width': number;
  'mobileScreen-height': number;

  tabletScreen: string;
  'tabletScreen-width': number;
  'tabletScreen-height': number;

  desktopScreen: string;
  'desktopScreen-width': number;
  'desktopScreen-height': number;
}
