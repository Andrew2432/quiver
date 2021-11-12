import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faReact,
  faReddit,
  faWordpress,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import useBreakpoint from '../../utils/hooks/useBreakpoint';

function FooterText(): JSX.Element {
  return (
    <Col
      lg={3}
      sm={12}
      className={`my-4 text-sm-center text-white text-lg-left`}
    >
      <h5>
        <span>&copy;{new Date().getFullYear()}.</span> All rights reserved.
      </h5>
      <br />
      <h5>
        This site is built with <FontAwesomeIcon icon={faHeart} size="1x" />{' '}
        using <FontAwesomeIcon icon={faReact} size="1x" /> and{' '}
        <FontAwesomeIcon icon={faWordpress} size="1x" /> and powered by{' '}
        <img
          src="/images/icons/next-js.svg"
          alt="Next.js"
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#fff',
            borderRadius: `50%`,
          }}
        />{' '}
        and{' '}
        <img
          src="/images/icons/typescript.svg"
          alt="TypeScript"
          style={{ width: '24px', height: '24px' }}
        />
      </h5>
    </Col>
  );
}

function FooterQuickLinks(): JSX.Element {
  return (
    <Col lg={3} sm={12} className={`text-center my-4`}>
      <h4 className={`text-white`}>Quick Links</h4>
      <ListGroup className={`text-dark`}>
        <Link href="/" passHref>
          <ListGroupItem as="button">Home</ListGroupItem>
        </Link>
        <Link href="/about" passHref>
          <ListGroupItem as="button">About</ListGroupItem>
        </Link>
        <Link href="/portfolio" passHref>
          <ListGroupItem as="button">Portfolio</ListGroupItem>
        </Link>
        <Link href="/blog" passHref>
          <ListGroupItem as="button">Blog</ListGroupItem>
        </Link>
        <Link href="/contact" passHref>
          <ListGroupItem as="button">Contact</ListGroupItem>
        </Link>
      </ListGroup>
    </Col>
  );
}

function FooterBoringLinks(): JSX.Element {
  return (
    <Col lg={3} sm={12} className={`text-center my-4`}>
      <h4 className={`text-white`}>Boring Stuff</h4>
      <ListGroup className={`text-dark`}>
        <Link href="/privacy-policy" passHref>
          <ListGroupItem as="button">Privacy Policy</ListGroupItem>
        </Link>
        <Link href="/disclaimer" passHref>
          <ListGroupItem as="button">Disclaimer</ListGroupItem>
        </Link>
        <Link href="/terms-and-conditions" passHref>
          <ListGroupItem as="button">Terms and Conditions</ListGroupItem>
        </Link>
      </ListGroup>
    </Col>
  );
}

function FooterSocialLinks(): JSX.Element {
  return (
    <Col lg={3} sm={12} className={`text-center my-4`}>
      <div
        className={`d-flex flex-wrap align-items-center justify-content-center mx-auto`}
      >
        <a
          href="https://github.com/Andrew2432"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Link"
          aria-label="GitHub Link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className={`mx-3 my-3`}
            style={{ cursor: 'pointer', color: '#fff' }}
            aria-label="GitHub Icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-joel-440a72152/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Link"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className={`mx-3 my-3`}
            style={{ cursor: 'pointer', color: '#fff' }}
            aria-label="LinkedIn Icon"
          />
        </a>

        <a
          href="https://www.youtube.com/channel/UCPcfLPvca2I9QWv4nkq7jeg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube Link"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            className={`mx-3 my-3`}
            style={{ cursor: 'pointer', color: '#fff' }}
            aria-label="YouTube Icon"
          />
        </a>
        <a
          href="https://reddit.com/user/xInfinity24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reddit Link"
        >
          <FontAwesomeIcon
            icon={faReddit}
            size="2x"
            className={`mx-3 my-3`}
            style={{ cursor: 'pointer', color: '#fff' }}
            aria-label="Reddit Icon"
          />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=andrewjoel.work@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GMail Link"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className={`mx-3 my-3`}
            style={{ cursor: 'pointer', color: '#fff' }}
            aria-label="Email Icon"
          />
        </a>
      </div>
    </Col>
  );
}

function MobileFooter(): JSX.Element {
  return (
    <>
      <FooterSocialLinks />
      <FooterQuickLinks />
      <FooterBoringLinks />
      <FooterText />
    </>
  );
}

function DesktopFooter(): JSX.Element {
  return (
    <>
      <FooterText />
      <FooterQuickLinks />
      <FooterBoringLinks />
      <FooterSocialLinks />
    </>
  );
}

function Footer(): JSX.Element {
  const breakpoint = useBreakpoint();

  return (
    <footer className={`bg-dark border-top border-light`}>
      <Container className="p-3">
        <Row>
          {['sm', 'xs'].indexOf(breakpoint) > -1 ? (
            <MobileFooter />
          ) : (
            <DesktopFooter />
          )}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
