import * as React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import HomeProject from './HomeProject';
import { ThemeProps } from '../../utils/ThemeContext';
import { Project } from '../../types/ProjectProps';

interface Props {
  theme: ThemeProps['theme'];
  projects: Project[];
}

function HomeProjects({ theme, projects }: Props) {
  const bg = `bg-${theme}`;

  return (
    <>
      <section>
        <Container className={`my-5 p-2 ${bg} text-center`}>
          <Row className={`my-2`}>
            <Col>
              <h1>
                <strong>My Top Projects</strong>
              </h1>
            </Col>
          </Row>
          <Row className={`my-2`}>
            <Col>
              <h5>These are some of my best projects till date.</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              {React.Children.toArray(
                projects.map((project) => (
                  <HomeProject project={project} theme={theme} />
                )),
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className={`${bg} text-center`}>
          <Row className={`align-items-center justify-content-center py-3`}>
            <Col lg={4} sm={12}>
              <h3>
                There are more <span>😎</span>
              </h3>
            </Col>
            <Col lg={4} sm={12}>
              <Link href={`/portfolio`}>
                <Button variant="info">Show Me!</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomeProjects;
