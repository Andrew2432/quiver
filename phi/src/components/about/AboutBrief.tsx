import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { ThemeProps } from '../../utils/ThemeContext';

interface AboutBriefProps {
  theme: ThemeProps['theme'];
}

function AboutBrief({ theme }: AboutBriefProps) {
  return (
    <Container className={`my-5`}>
      <Row>
        <Col>
          <h2 className={`text-center`}>
            <strong>I am a</strong>
          </h2>
        </Col>
      </Row>
      <Row className={`text-center justify-content-center`}>
        <Col lg={5} className={`my-3 mx-2`}>
          <Card
            bg={theme}
            className={`h-100 border-${theme === 'light' ? 'dark' : 'light'}`}
          >
            <Card.Header>
              <Card.Title>
                <h3>
                  Web Developer <span>🕸️</span>
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>
                I develop full-stack, scalable, reliable and fast websites.
                Proficient in MERN Stack and LAMP Stack.
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className={`my-3 mx-2`}>
          <Card
            bg={theme}
            className={`h-100 border-${theme === 'light' ? 'dark' : 'light'}`}
          >
            <Card.Header>
              <Card.Title>
                <h3>
                  Programmer <span>💻</span>
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>
                I am well versed in general programming niche, including but not
                limited to Python, Java, C/C++, C#, Rust, PHP, JS, TS.
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className={`text-center justify-content-center`}>
        <Col lg={5} className={`my-3 mx-2`}>
          <Card
            bg={theme}
            className={`h-100 border-${theme === 'light' ? 'dark' : 'light'}`}
          >
            <Card.Header>
              <Card.Title>
                <h3>
                  Blogger <span>✍️</span>
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>
                I write developer friendly content that may save your time
                someday. I also write some random articles.
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className={`my-3 mx-2`}>
          <Card
            bg={theme}
            className={`h-100 border-${theme === 'light' ? 'dark' : 'light'}`}
          >
            <Card.Header>
              <Card.Title>
                <h3>
                  Gamer <span>🕹️</span>
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>
                I play games. I love to play strategy, RPG and action based
                games.
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutBrief;
