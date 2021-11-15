import { TechinalSkills } from "@quiver/graphql-client";

export interface AboutSkill {
  name: string;
  url: string;
}

// @ts-ignore
interface AboutTechnicalSkill<T> {
  title: string;
  description: string;
  skills: Readonly<AboutSkill[]>;
  currentLearningSkills: Readonly<AboutSkill[]>;
}

export interface AboutTechnicalSkillType
  extends Readonly<AboutTechnicalSkill<TechinalSkills>> {}
