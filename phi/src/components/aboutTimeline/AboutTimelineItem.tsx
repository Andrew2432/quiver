import * as React from 'react';
import styles from '../../styles/about/AboutTimeline.module.css';
import ThemeContext from '../../utils/ThemeContext';
import { AboutTimelineItemProps } from './AboutTimelineProps';

const { useContext } = React;

/**
 * @deprecated
 */
function EventLink() {
  const link = {
    url: '',
    text: '',
  };

  return (
    <>
      {link && (
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      )}
    </>
  );
}

function AboutTimelineItem({ timelineEvent }: AboutTimelineItemProps) {
  const { theme } = useContext(ThemeContext);
  const { event, date, timelineCategory } = timelineEvent;

  return (
    <div className={styles['timeline-item']}>
      <div
        className={styles['timeline-item-content']}
        style={{
          backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
          border: `1px solid ${theme === 'light' ? '#343a40' : '#f8f9fa'}`,
        }}
      >
        <span
          className={styles['tag']}
          style={{ background: timelineCategory.color }}
        >
          {timelineCategory.tag}
        </span>
        <time>{date}</time>
        <p>{event}</p>
        <span className={styles['circle']} />
      </div>
    </div>
  );
}

export default AboutTimelineItem;
