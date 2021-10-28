import * as React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ThemeContext, { ThemeProps } from '../../utils/ThemeContext';
import { Project } from '../../types/ProjectProps';
import CustomTooltip from '../shared/tooltips/CustomTooltip';

const { useContext } = React;

interface Props {
  personalProjects: Project[] | null;
  clientProjects: Project[] | null;
}

interface ProjectCardProps {
  project: Project;
  theme: ThemeProps['theme'];
}

interface ProjectsListProps {
  title: string;
  projects: Project[] | null;
  theme: ThemeProps['theme'];
}

function ProjectCard({ project, theme }: ProjectCardProps) {
  const borderForTopProject =
    project.project_is_top === 'true'
      ? `border border-5 border-${theme === 'light' ? 'dark' : 'light'}`
      : null;
  return (
    <Col lg={4} sm={12} className={`my-3`}>
      <Card bg={theme} className={`h-100 ${borderForTopProject}`}>
        <Card.Header>
          <Card.Img
            variant="top"
            src={
              project.project_snapshots.length
                ? project.project_snapshots[0].sizes.mobileScreen
                : ''
            }
          />
          <Card.Title className={`d-flex justify-content-between`}>
            <h2>
              <strong>{project.project_title}</strong>
            </h2>
            {project.project_is_top === 'true' && (
              <CustomTooltip tip="Top Project">
                <FontAwesomeIcon icon={faStar} className={`my-auto`} />
              </CustomTooltip>
            )}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <h5>{parse(project.project_description)}</h5>
        </Card.Body>
        <Card.Footer>
          <Row className={`justify-content-around my-2`}>
            <Link href={`/portfolio/projects/${project.project_slug}`} passHref>
              <Button>More Details</Button>
            </Link>
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Demo URL"
            >
              <Button variant="success">Live Demo</Button>
            </a>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

function ProjectsList({ title, projects, theme }: ProjectsListProps) {
  return (
    <Container
      className={`bg-${theme === 'light' ? 'info' : 'secondary'} my-5 p-3`}
    >
      <Row>
        <Col>
          <h2 className={`text-center text-white`}>
            <strong>
              <u>{title}</u>
            </strong>
          </h2>
        </Col>
      </Row>
      <Row>
        {projects &&
          React.Children.toArray(
            projects.map((project) => (
              <ProjectCard project={project} theme={theme} />
            )),
          )}
      </Row>
    </Container>
  );
}

function Portfolio({ personalProjects, clientProjects }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <Row>
            <Col>
              <h1>
                <strong>My Portfolio</strong>
              </h1>
              <p>
                See all my latest and greatest client projects as well as
                personal projects.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <ProjectsList
        title="Personal Projects"
        projects={personalProjects}
        theme={theme}
      />
      {/* <ProjectsList
        title="Client Projects"
        projects={clientProjects}
        theme={theme}
      /> */}
    </>
  );
}

export default Portfolio;
