import { TechinalSkills } from '../generated/graphql';

export interface AboutSkill {
  name: string;
  url: string;
}

interface GenericAboutTechnicalSkill<T> {
  title: string;
  description: string;
  skills: AboutSkill[];
  currentLearningSkills: AboutSkill[];
}

export interface AboutTechnicalSkillType
  extends GenericAboutTechnicalSkill<TechinalSkills> {}
