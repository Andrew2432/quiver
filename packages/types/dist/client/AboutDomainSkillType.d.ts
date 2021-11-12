import { DomainSkills } from "@quiver/graphql-client";
interface GenericAboutDomainSkill<T> {
    title: string;
    description: string;
}
export interface AboutDomainSkillType extends Readonly<GenericAboutDomainSkill<DomainSkills>> {
}
export {};
