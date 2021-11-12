import {
  AuthorTimeline,
  Timeline,
  TimelineCategory,
} from "@quiver/graphql-client";

// @ts-ignore
interface GenericAboutTimelineCategory<K> {
  tag: string;
  color: string;
}

// @ts-ignore
interface GenericAboutTimelineEvent<T, K> {
  event: string;
  date: string;
  timelineCategory: Readonly<GenericAboutTimelineCategory<K>>;
}

// @ts-ignore
interface GenericAboutTimeline<V, T, K> {
  timelineEvents: Readonly<GenericAboutTimelineEvent<T, K>>[];
}

export interface AboutTimelineCategory
  extends Readonly<GenericAboutTimelineCategory<TimelineCategory>> {}

export interface AboutTimelineEventType
  extends Readonly<GenericAboutTimelineEvent<Timeline, TimelineCategory>> {}

export interface AboutTimelineType
  extends Readonly<
    GenericAboutTimeline<AuthorTimeline, Timeline, TimelineCategory>
  > {}
