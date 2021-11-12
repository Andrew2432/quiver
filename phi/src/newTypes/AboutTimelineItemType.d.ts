import {
  AuthorTimeline,
  Timeline,
  TimelineCategory,
} from '../generated/graphql';

interface GenericAboutTimelineCategory<K> {
  tag: string;
  color: string;
}

interface GenericAboutTimelineEvent<T, K> {
  event: string;
  date: string;
  timelineCategory: GenericAboutTimelineCategory<K>;
}

interface GenericAboutTimeline<V, T, K> {
  timelineEvents: AboutTimelineEvent<T, K>[];
}

export interface AboutTimelineCategory
  extends GenericAboutTimelineCategory<TimelineCategory> {}

export interface AboutTimelineEventType
  extends GenericAboutTimelineEvent<Timeline, TimelineCategory> {}

export interface AboutTimelineType
  extends GenericAboutTimeline<AuthorTimeline, Timeline, TimelineCategory> {}
