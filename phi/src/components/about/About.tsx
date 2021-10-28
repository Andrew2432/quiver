import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ThemeContext from '../../utils/ThemeContext';
import AboutSkills from './AboutSkills';
import AboutBrief from './AboutBrief';
import AboutTimeline from './AboutTimeline';

const { useContext } = React;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Jumbotron className={`bg-${theme}`}>
        <Container>
          <Row className={`text-center`}>
            <Col>
              <h1>
                <strong>About Me</strong>
              </h1>
              <h5>
                SAY MY NAME! <span>😎</span>
              </h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <AboutBrief theme={theme} />
      <AboutSkills theme={theme} />
      <AboutTimeline theme={theme} />
    </>
  );
}

export default About;
