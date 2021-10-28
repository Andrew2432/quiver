import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { ThemeProps } from '../../utils/ThemeContext';
import { SkillsProps } from '../../types/SkillsProps';
import skills from '../../data/skills';

interface Props {
  theme: ThemeProps['theme'];
}

interface SkillSetProps {
  theme: ThemeProps['theme'];
  skill: SkillsProps;
}

function SkillSet({
  theme,
  skill: { title, description, skills, learningSkills },
}: SkillSetProps) {
  const learningSkillsLength = learningSkills.length;

  return (
    <Col className={`my-3`} lg={3} sm={12}>
      <Card
        className={`bg-${theme} border border-${
          theme === 'light' ? 'dark' : 'white'
        } border-3 rounded-3 h-100`}
      >
        <Card.Header className={`text-center`}>
          <Card.Title>
            <h3>
              <strong>{title}</strong>
            </h3>
          </Card.Title>
          <Card.Subtitle>{description}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <ul className={`pl-3`}>
            {React.Children.toArray(skills.map((skill) => <li>{skill}</li>))}
          </ul>
        </Card.Body>
        <Card.Footer>
          I'm currently learning these skills:{' '}
          {React.Children.toArray(
            learningSkills.map((skill, index) => (
              <span>
                {skill}
                {index + 1 < learningSkillsLength && ', '}
              </span>
            )),
          )}
          {'.'}
        </Card.Footer>
      </Card>
    </Col>
  );
}

function AboutSkills({ theme }: Props) {
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
              skills.map((skill) => <SkillSet theme={theme} skill={skill} />),
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSkills;
