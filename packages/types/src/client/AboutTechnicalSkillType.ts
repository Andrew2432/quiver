import { TechinalSkills } from "@quiver/graphql-client";

interface AboutSkill {
  name: string;
  url: string;
}

interface AboutTechnicalSkill {
  title: string;
  description: string;
  skills: Readonly<AboutSkill[]>;
  currentLearningSkills: Readonly<AboutSkill[]>;
}

export type AboutTechnicalSkillType = AboutTechnicalSkill | TechinalSkills;
