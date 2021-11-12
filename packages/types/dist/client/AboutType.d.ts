import { About } from "@quiver/graphql-client";
import { AboutDomainSkillType } from "./AboutDomainSkillType";
import { AboutTechnicalSkillType } from "./AboutTechnicalSkillType";
import { AboutTimelineType } from "./AboutTimelineItemType";
interface GenericAboutType<T> {
    title: string;
    description: string;
    technicalSkills: Readonly<AboutTechnicalSkillType>[];
    domainSkills: Readonly<AboutDomainSkillType>[];
    timeline: Readonly<AboutTimelineType>;
}
export interface AboutType extends Readonly<GenericAboutType<About>> {
}
export {};
