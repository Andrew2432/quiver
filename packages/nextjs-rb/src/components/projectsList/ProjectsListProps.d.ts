import { ProjectType } from '../../newTypes/ProjectType';

export interface ProjectsListProps {
  title: string;
  projects: ProjectType[] | null;
  theme: ThemeProps['theme'];
}
