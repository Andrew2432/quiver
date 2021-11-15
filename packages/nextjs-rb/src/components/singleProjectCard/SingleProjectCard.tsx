import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectType } from '@quiver/types';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeContext from '../../utils/ThemeContext';
import MDXRenderer from '../MDXRenderer';
import ProjectButton from '../projectButton/ProjectButton';
import CustomTooltip from '../shared/tooltips/CustomTooltip';
import ProjectCarousel from './ProjectCarousel';
import {
  ButtonLinkProps,
  SingleProjectCardProps,
} from './SingleProjectCardProps';

const { useContext } = React;

function GitHubButton({ link }: ButtonLinkProps) {
  if (!link) return null;

  return (
    <ProjectButton
      variant="secondary"
      link={link}
      icon={faGithub}
      text="GitHub Link"
    />
  );
}

function LiveProjectButton({ link }: ButtonLinkProps) {
  if (!link) return null;

  return (
    <ProjectButton
      variant="success"
      link={link}
      icon={faPlayCircle}
      text="Live Demo"
    />
  );
}

function CardHeader(project: ProjectType) {
  const { description, snapshots, githubLink, deployedLink } = project;

  return (
    <Card.Header className={`text-center px-0 mx-0`}>
      <CardTitle {...project} />
      <Card.Subtitle>
        <MDXRenderer content={description} />
      </Card.Subtitle>
      <Row>
        <ProjectCarousel snapshots={snapshots} />
      </Row>
      <Row className={`align-items-center justify-content-center`}>
        <GitHubButton link={githubLink} />
        <LiveProjectButton link={deployedLink} />
      </Row>
    </Card.Header>
  );
}

function CardTitle(project: ProjectType) {
  const { title, isTop } = project;

  return (
    <Card.Title className={`d-flex align-items-center justify-content-center`}>
      <h1>
        <strong>{title}</strong>
      </h1>
      {isTop && (
        <CustomTooltip tip="Top Project">
          <FontAwesomeIcon icon={faStar} className={`mx-3 my-auto`} />
        </CustomTooltip>
      )}
    </Card.Title>
  );
}

function CardBody(project: ProjectType) {
  const { content } = project;

  return (
    <Card.Body>
      <MDXRenderer content={content} />
    </Card.Body>
  );
}

function SingleProjectCard({ project }: SingleProjectCardProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Row className={`my-5`}>
      <Col>
        <Card bg={theme} className={`p-3`}>
          <CardHeader {...project} />
          <CardBody {...project} />
        </Card>
      </Col>
    </Row>
  );
}

export default SingleProjectCard;
