import { About } from '../generated/graphql';
import { AboutDomainSkillType } from './AboutDomainSkillType';
import { AboutTechnicalSkillType } from './AboutTechnicalSkillType';
import { AboutTimelineType } from './AboutTimelineItemType';

interface GenericAboutType<T> {
  title: string;
  description: string;
  technicalSkills: AboutTechnicalSkillType[];
  domainSkills: AboutDomainSkillType[];
  timeline: AboutTimelineType;
}

export interface AboutType extends GenericAboutType<About> {}
