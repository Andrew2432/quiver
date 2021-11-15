import { AboutSkill, AboutTechnicalSkillType } from '@quiver/types';

export interface AboutSkillsProps {
  technicalSkills: AboutTechnicalSkillType[];
}

export interface CreateCurrentLearningSkillProps {
  skill: AboutSkill;
  index: number;
}
