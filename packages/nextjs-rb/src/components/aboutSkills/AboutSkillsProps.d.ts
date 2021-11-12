import {
  AboutSkill,
  AboutTechnicalSkillType,
} from '../../newTypes/AboutTechnicalSkillType';

export interface AboutSkillsProps {
  technicalSkills: AboutTechnicalSkillType[];
}

export interface AboutSkillSetProps {
  technicalSkill: AboutTechnicalSkillType;
}

export interface CreateSkillProps {
  skill: AboutSkill;
}

export interface CreateCurrentLearningSkillProps {
  skill: AboutSkill;
  index: number;
}
