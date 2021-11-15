import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ThemeContext from '../../utils/ThemeContext';
import MDXRenderer from '../mdxRenderer/MDXRenderer';
import { AboutBriefCardProps } from './AboutBriefCardProps';

function AboutBriefCard({ domainSkill }: AboutBriefCardProps) {
  const { title, description } = domainSkill;
  const { theme } = useContext(ThemeContext);

  return (
    <Col lg={5} className={`my-3 mx-2`}>
      <Card
        bg={theme}
        className={`h-100 border-${theme === 'light' ? 'dark' : 'light'}`}
      >
        <Card.Header>
          <Card.Title>
            <MDXRenderer content={title} />
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <MDXRenderer content={description} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AboutBriefCard;
