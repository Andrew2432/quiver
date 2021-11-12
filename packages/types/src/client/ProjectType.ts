import { Enum_Project_Category, Project } from "@quiver/graphql-client";
import { SnapshotType } from "./SnapshotType";

export enum ProjectCategory {
  Personal = "Personal",
  Client = "Client",
}

// @ts-ignore
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
  snapshots: Readonly<SnapshotType>[];
}

export interface ProjectType
  extends Readonly<GenericProjectType<Project, Enum_Project_Category>> {}
