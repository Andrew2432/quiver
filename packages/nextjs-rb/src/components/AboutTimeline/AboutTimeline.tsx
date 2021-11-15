import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../../styles/about/AboutTimeline.module.css';
import ThemeContext from '../../utils/ThemeContext';
import AboutTimelineItem from '../AboutTimelineItem';
import { AboutTimelineProps } from './AboutTimelineProps';

const { useContext } = React;

function AboutTimeline({ timeline }: AboutTimelineProps) {
  const { theme } = useContext(ThemeContext);
  const { timelineEvents } = timeline;

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
                {timelineEvents.length > 0 && (
                  <div className={styles['timeline-container']}>
                    {React.Children.toArray(
                      timelineEvents.map((timelineEvent, index) => (
                        <AboutTimelineItem
                          timelineEvent={timelineEvent}
                          key={index}
                        />
                      ))
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
