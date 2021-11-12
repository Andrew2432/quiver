import { DomainSkills } from '../generated/graphql';

interface GenericAboutDomainSkill<T> {
  title: string;
  description: string;
}

export interface AboutDomainSkillType
  extends GenericAboutDomainSkill<DomainSkills> {}
