import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faMapMarkerAlt,
  faCode,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/home/Hero.module.css';

function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <Container className={`text-white text-center my-auto mx-auto`}>
        <Row className={`my-2`}>
          <Col>
            <h1>Hi! I&apos;m Andrew Joel.</h1>
          </Col>
        </Row>
        <Row className={`my-4`}>
          <Col>
            <Image
              src="/images/avatar/andrew.webp"
              alt="Andrew Joel"
              className={`${styles.avatar} mx-auto`}
              loading="lazy"
              width="180"
              height="180"
            />
          </Col>
        </Row>
        <Row className={`my-2`}>
          <h4 className={`mx-auto`}>
            <FontAwesomeIcon icon={faBriefcase} /> MERN Stack Developer
          </h4>
        </Row>
        <Row className={`my-2`}>
          <h4 className={`mx-auto`}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Chennai, India
          </h4>
        </Row>
        <Row className={`mx-auto align-items-center justify-content-center`}>
          <Col lg={3} sm={12} className={`my-3`}>
            <Link href="/portfolio" passHref>
              <Button variant="info">
                SEE MY WORK <FontAwesomeIcon icon={faCode} />
              </Button>
            </Link>
          </Col>
          <Col lg={3} sm={12} className={`my-3`}>
            <Link href="/contact" passHref>
              <Button variant="outline-light">
                CONTACT ME <FontAwesomeIcon icon={faPhoneAlt} />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
