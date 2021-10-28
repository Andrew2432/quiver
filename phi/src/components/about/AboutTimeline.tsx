import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import timelineData from '../../data/timeline';
import { AboutTimelineItem } from '../../types/AboutTimelineItem';
import styles from '../../styles/about/AboutTimeline.module.css';
import { ThemeProps } from '../../utils/ThemeContext';

interface Props {
  theme: ThemeProps['theme'];
}

interface TimelineProps {
  data: AboutTimelineItem;
  theme: ThemeProps['theme'];
}

function TimelineItem({
  data: { text, date, category, link },
  theme,
}: TimelineProps) {
  return (
    <div className={styles['timeline-item']}>
      <div
        className={styles['timeline-item-content']}
        style={{
          backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
          border: `1px solid ${theme === 'light' ? '#343a40' : '#f8f9fa'}`,
        }}
      >
        <span className={styles['tag']} style={{ background: category.color }}>
          {category.tag}
        </span>
        <time>{date}</time>
        <p>{text}</p>
        {link && (
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        )}
        <span className={styles['circle']} />
      </div>
    </div>
  );
}

function AboutTimeline({ theme }: Props) {
  return (
    <section>
      <Container
        className={`my-5 bg-${theme} text-${
          theme === 'light' ? 'black' : 'white'
        }`}
      >
        <Row className={`p-2`}>
          <Col>
            <Row className={`text-center my-3`}>
              <Col>
                <h2>
                  <strong>My Timeline</strong>
                </h2>
                <h5>Join me through this exciting adventure called life!</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                {timelineData.length > 0 && (
                  <div className={styles['timeline-container']}>
                    {React.Children.toArray(
                      timelineData.map((data) => (
                        <TimelineItem data={data} theme={theme} />
                      )),
                    )}
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutTimeline;
