import { AuthorTimeline, Timeline, TimelineCategory } from "@quiver/graphql-client";
interface GenericAboutTimelineCategory<K> {
    tag: string;
    color: string;
}
interface GenericAboutTimelineEvent<T, K> {
    event: string;
    date: string;
    timelineCategory: Readonly<GenericAboutTimelineCategory<K>>;
}
interface GenericAboutTimeline<V, T, K> {
    timelineEvents: Readonly<GenericAboutTimelineEvent<T, K>>[];
}
export interface AboutTimelineCategory extends Readonly<GenericAboutTimelineCategory<TimelineCategory>> {
}
export interface AboutTimelineEventType extends Readonly<GenericAboutTimelineEvent<Timeline, TimelineCategory>> {
}
export interface AboutTimelineType extends Readonly<GenericAboutTimeline<AuthorTimeline, Timeline, TimelineCategory>> {
}
export {};
