import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../projectCard/ProjectCard';
import { ProjectCardProps } from '../projectCard/ProjectCardProps';
import { ProjectsListProps } from './ProjectsListProps';

function createProjectCard({ project, theme }: ProjectCardProps) {
  return <ProjectCard project={project} theme={theme} />;
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
            projects.map((project) => createProjectCard({ project, theme }))
          )}
      </Row>
    </Container>
  );
}

export default ProjectsList;
