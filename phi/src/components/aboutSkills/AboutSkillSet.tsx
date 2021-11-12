import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ThemeContext from '../../utils/ThemeContext';
import MDXRenderer from '../mdxRenderer/MDXRenderer';
import { AboutSkillSetProps, CreateSkillProps } from './AboutSkillsProps';

const { useContext } = React;

function createSkill({ skill }: CreateSkillProps) {
  return <li>{skill.name}</li>;
}

function AboutSkillSet({ technicalSkill }: AboutSkillSetProps) {
  const { title, description, skills, currentLearningSkills } = technicalSkill;
  const { theme } = useContext(ThemeContext);
  const currentLearningSkillsLength = currentLearningSkills.length;

  return (
    <Col className={`my-3`} lg={3} sm={12}>
      <Card
        className={`bg-${theme} border border-${
          theme === 'light' ? 'dark' : 'white'
        } border-3 rounded-3 h-100`}
      >
        <Card.Header className={`text-center`}>
          <Card.Title>
            <MDXRenderer content={title} />
          </Card.Title>
          <Card.Subtitle>
            <MDXRenderer content={description} />
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <ul className={`pl-3`}>
            {React.Children.toArray(
              skills.map((skill) => createSkill({ skill }))
            )}
          </ul>
        </Card.Body>
        <Card.Footer>
          I&quot;m currently learning these skills:{' '}
          {React.Children.toArray(
            currentLearningSkills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index + 1 < currentLearningSkillsLength && ', '}
              </span>
            ))
          )}
          {'.'}
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default AboutSkillSet;
