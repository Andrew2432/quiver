import { ProjectType } from '../../newTypes/ProjectType';
import { SnapshotType } from '../../newTypes/SnapshotType';

export interface SingleProjectCardProps {
  project: ProjectType;
}

export interface ProjectCarouselProps {
  snapshots: SnapshotType[];
}

export interface ProjectSnapshotProps {
  snapshot: SnapshotType;
}

export interface ButtonLinkProps {
  link: string;
}
