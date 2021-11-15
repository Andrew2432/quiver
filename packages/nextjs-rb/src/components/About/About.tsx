import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import ThemeContext from '../../utils/ThemeContext';
import AboutBrief from '../AboutBrief';
import AboutTimeline from '../aboutTimeline/AboutTimeline';
import MDXRenderer from '../mdxRenderer/MDXRenderer';
import { AboutProps } from './AboutProps';

const { useContext } = React;

function About({ data }: AboutProps) {
  const { theme } = useContext(ThemeContext);
  const { title, description, domainSkills, technicalSkills, timeline } = data;

  return (
    <>
      <Jumbotron className={`bg-${theme}`}>
        <Container>
          <Row className={`text-center`}>
            <Col>
              <MDXRenderer content={title} />
              <MDXRenderer content={description} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <AboutBrief domainSkills={domainSkills} />
      {/* <AboutSkills technicalSkills={technicalSkills} /> */}
      <AboutTimeline timeline={timeline} />
    </>
  );
}

export default About;
