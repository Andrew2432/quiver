import {
  AboutTimelineEventType,
  AboutTimelineType,
} from '../../newTypes/AboutTimelineItemType';

export interface AboutTimelineProps {
  timeline: AboutTimelineType;
}

export interface AboutTimelineItemProps {
  timelineEvent: AboutTimelineEventType;
}
