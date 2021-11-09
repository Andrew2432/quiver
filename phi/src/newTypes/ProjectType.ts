/**
 * Enum does not get exported on .d.ts files
 * So this file is .ts
 */
import { Enum_Project_Category, Project } from '../generated/graphql';
import { SnapshotType } from './SnapshotType';

export enum ProjectCategory {
  Personal = 'Personal',
  Client = 'Client',
}

interface GenericProjectType<T, V> {
  id: string;
  title: string;
  description: string;
  slug: string;
  isTop: boolean;
  githubLink: string;
  category: V;
  content: string;
  clientName: string;
  startDate: string;
  endDate: string;
  deployedLink: string;
  snapshots: SnapshotType[];
}

export interface ProjectType
  extends GenericProjectType<Project, Enum_Project_Category> {}
