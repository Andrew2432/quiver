import { ProjectType } from '../../newTypes/ProjectType';

export interface PortfolioProps {
  personalProjects: ProjectType[] | null;
  clientProjects: ProjectType[] | null;
}
