import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import ThemeContext from '../../utils/ThemeContext';
import ProjectsList from '../projectsList/ProjectsList';
import { PortfolioProps } from './PortfolioProps';

const { useContext } = React;

function Portfolio({ personalProjects, clientProjects }: PortfolioProps) {
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
