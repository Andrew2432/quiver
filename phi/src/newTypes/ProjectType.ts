/**
 * Enum does not get exported on .d.ts files
 * So this file is .ts
 */

import { ImageType } from './ImageType';

export enum ProjectCategory {
  PERSONAL = 'Personal',
  CLIENT = 'Client',
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  slug: string;
  is_top: string;
  github_link: string;
  category: ProjectCategory;
  content: string;
  client_name: string;
  start_date: string;
  end_date: string;
  deployed_url: string;
  snapshots: ImageType[];
}
