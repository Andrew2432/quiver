import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { ThemeProps } from '../../utils/ThemeContext';

interface HomeBioProps {
  theme: ThemeProps['theme'];
}

function HomeBio({ theme }: HomeBioProps) {
  return (
    <section>
      <Container className={`bg-${theme} my-5 shadow`}>
        <Row className={`p-3`}>
          <Col sm={12}>
            <Row>
              <Col md={6}>
                <Row>
                  <Col sm={6} md={5}>
                    <div className="about-img">
                      <Image
                        src="/images/avatar/andrew1-2.jpg"
                        className={`img-fluid object-fit-cover`}
                        alt="Andrew Picture"
                        width="200"
                        height="200"
                      />
                    </div>
                  </Col>
                  <Col sm={6} md={7}>
                    <div>
                      <p>
                        <h5>
                          <strong>Name: </strong>Andrew Joel
                        </h5>
                      </p>
                      <p>
                        <h5>
                          <strong>Profile: </strong>Full Stack Developer
                        </h5>
                      </p>
                      <p>
                        <h5>
                          <strong>Email: </strong>andrewjoel.work@gmail.com
                        </h5>
                      </p>
                      <p>
                        <h5>
                          <strong>Phone: </strong>+91 84288 53169
                        </h5>
                      </p>
                    </div>
                  </Col>
                </Row>
                <hr />
                <div className={`mt-3`}>
                  <h4>
                    <strong>Skills</strong>
                  </h4>
                  <span>Basic Development:</span>{' '}
                  <span className="pull-right">95%</span>
                  <ProgressBar
                    striped
                    srOnly
                    min={0}
                    max={100}
                    now={95}
                    aria-label="95%"
                    role="progressbar"
                    label={`95%`}
                  />
                  <br />
                  <span>Front End Development:</span>{' '}
                  <span className="pull-right">90%</span>
                  <ProgressBar
                    striped
                    srOnly
                    min={0}
                    max={100}
                    now={90}
                    aria-label="90%"
                    role="progressbar"
                    label={`90%`}
                  />
                  <br />
                  <span>Back End Development:</span>{' '}
                  <span className="pull-right">85%</span>
                  <ProgressBar
                    striped
                    srOnly
                    min={0}
                    max={100}
                    now={85}
                    aria-label="85%"
                    role="progressbar"
                    label={`85%`}
                  />
                  <br />
                  <span>DevOps:</span> <span className="pull-right">80%</span>
                  <ProgressBar
                    striped
                    srOnly
                    min={0}
                    max={100}
                    now={80}
                    aria-label="80%"
                    role="progressbar"
                    label={`80%`}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className={`pt-4 pt-md-0`}>
                  <h2>
                    <strong>About me</strong>
                  </h2>
                  <p className="lead">
                    I am a full stack web developer. I have over 2 years of
                    experience in building web applications. I am skilled in
                    Node.js and PHP and well-versed with MERN stack and LAMP
                    stack.
                  </p>
                  <p className="lead">
                    I began coding since 2015. I know to develop applications
                    using C/C++, Python, Java, and C#.
                  </p>
                  <p className="lead">
                    I always strive to provide the best results within the
                    allocated timeframe. I follow recommended coding paradigms
                    and techniques to deliver flexible, scalable and
                    maintainable web applications.
                  </p>
                </div>
                <Link href={`/about`} passHref>
                  <Button
                    variant={`outline-${theme === 'light' ? 'dark' : 'light'}`}
                  >
                    Read more
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeBio;
