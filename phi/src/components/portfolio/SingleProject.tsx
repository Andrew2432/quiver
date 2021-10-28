import * as React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Project } from '../../types/ProjectProps';
import PostComment from '../shared/comments/PostComment';
import DisplayComments from '../shared/comments/DisplayComments';
import ThemeContext, { ThemeProps } from '../../utils/ThemeContext';
import useBreakpoint, { Breakpoint } from '../../utils/hooks/useBreakpoint';
import Divider from '../shared/divider/Divider';
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import CustomTooltip from '../shared/tooltips/CustomTooltip';

const { useContext } = React;

interface Props {
  project: Project;
}

interface SingleProjectCardProps {
  project: Project;
  theme: ThemeProps['theme'];
  breakpoint: Breakpoint;
}

function SingleProjectCard({
  project,
  theme,
  breakpoint,
}: SingleProjectCardProps) {
  return (
    <Row className={`my-5`}>
      <Col>
        <Card bg={theme} className={`p-3`}>
          <Card.Header className={`text-center px-0 mx-0`}>
            <Card.Title
              className={`d-flex align-items-center justify-content-center`}
            >
              <h1>
                <strong>{project.project_title}</strong>
              </h1>
              {project.project_is_top === 'top' && (
                <CustomTooltip tip="Top Project">
                  <FontAwesomeIcon icon={faStar} className={`mx-3 my-auto`} />
                </CustomTooltip>
              )}
            </Card.Title>
            <Card.Subtitle>
              <h5>{parse(project.project_description)}</h5>
            </Card.Subtitle>
            <Carousel className={`my-3`} interval={2000} fade={true}>
              {React.Children.toArray(
                project.project_snapshots.map((snapshot, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={
                        breakpoint === 'xs'
                          ? snapshot.sizes.mobileScreen
                          : snapshot.sizes.tabletScreen
                      }
                      alt={snapshot.alt}
                    />
                    {breakpoint !== 'xs' && (
                      <Carousel.Caption>
                        <p>{parse(snapshot.description)}</p>
                      </Carousel.Caption>
                    )}
                  </Carousel.Item>
                )),
              )}
            </Carousel>
            <Row className={`align-items-center justify-content-center`}>
              {project.project_github_link && (
                <Col lg={3} sm={12} className={`my-3`}>
                  <a
                    href={project.project_github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">
                      <FontAwesomeIcon icon={faGithub} /> GitHub Link
                    </Button>
                  </a>
                </Col>
              )}
              {project.project_url && (
                <Col lg={3} sm={12} className={`my-3`}>
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="success">
                      <FontAwesomeIcon icon={faPlayCircle} /> Live Demo
                    </Button>
                  </a>
                </Col>
              )}
            </Row>
          </Card.Header>
          <Card.Body>{parse(project.project_content)}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

function SingleProject({ project }: Props) {
  const { theme } = useContext(ThemeContext);
  const breakpoint = useBreakpoint();
  const id = project.project_ID.toString();

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={
            project.project_snapshots[0].sizes.tabletScreen ||
            project.project_snapshots[0].sizes.medium ||
            project.project_snapshots[0].sizes.large
          }
          key="og:image"
        />
      </Head>
      <Container>
        <SingleProjectCard
          project={project}
          theme={theme}
          breakpoint={breakpoint}
        />
        <Divider />
        <PostComment id={id} />
        <Divider />
        <DisplayComments id={id} />
      </Container>
    </>
  );
}

export default SingleProject;
