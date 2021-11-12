import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ThemeContext from '../../utils/ThemeContext';
import AboutSkillSet from './AboutSkillSet';
import { AboutSkillsProps } from './AboutSkillsProps';

const { useContext } = React;

function AboutSkills({ technicalSkills }: AboutSkillsProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className={`bg-${theme}`}>
      <Row className={`p-1`}>
        <Col>
          <Row className={`text-center my-3 mx-auto`}>
            <Col>
              <h2>
                <strong>My Skills</strong>
              </h2>
              <h5>Be a jack of all trades and a master of some.</h5>
            </Col>
          </Row>
          <Row>
            {React.Children.toArray(
              technicalSkills.map((technicalSkill, index) => (
                <AboutSkillSet technicalSkill={technicalSkill} key={index} />
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSkills;
