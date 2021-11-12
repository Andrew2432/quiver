import Link from 'next/link';
import parse from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { ThemeProps } from '../../utils/ThemeContext';
import { Project } from '../../types/ProjectProps';

interface HomeProjectsProps {
  theme: ThemeProps['theme'];
  project: Project;
}

function HomeProject({ theme, project }: HomeProjectsProps) {
  const bg = `bg-${theme}`;

  return (
    <Card
      className={`${bg} my-3 border border-rounded border-${
        theme === 'dark' ? 'white' : 'dark'
      }`}
    >
      <Container className={`p-3`}>
        <Row>
          <Col lg={5} sm={12}>
            <Card.Img
              src={project.project_snapshots[0].sizes.mobileScreen}
              alt={project.project_snapshots[0].alt}
              className={`my-auto mx-auto img-fluid`}
            />
          </Col>
          <Col lg={7} sm={12}>
            <Card.Header>
              <Card.Title>
                <h3>
                  <strong>{parse(project.project_title)}</strong>
                </h3>
              </Card.Title>
              <Card.Subtitle>{parse(project.project_type)}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <h5>{parse(project.project_description)}</h5>
            </Card.Body>
            <Card.Footer>
              <Row className={`align-items-center justify-content-center`}>
                <Col lg={4} sm={3} className={`my-3`}>
                  <a href={project.project_url}>
                    <Button variant="success">
                      Live Demo <FontAwesomeIcon icon={faPlayCircle} />
                    </Button>
                  </a>
                </Col>
                <Col lg={4} sm={3} className={`my-3`}>
                  <Link
                    href={`/portfolio/projects/${project.project_slug}`}
                    passHref
                  >
                    <Button>Read More</Button>
                  </Link>
                </Col>
              </Row>
            </Card.Footer>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default HomeProject;
