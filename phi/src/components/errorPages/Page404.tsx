import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Page404() {
  return (
    <Container
      className={`text-center my-5`}
      style={{ display: 'grid', placeItems: 'center' }}
    >
      <Row className={`d-flex align-items-center justify-content-center`}>
        <Col>
          <Row className={`my-3`}>
            <Col>
              <h1>
                Page not found <span>😮</span>
              </h1>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <Image
                src="/images/errorPages/Unsettled-Tom.jpg"
                alt="Unsettled Tom"
                width="300"
                height="300"
              />
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <h2>Tom has never seen such a page before.</h2>
              <h4>Why don't you visit our homepage instead?</h4>
              <Link href="/" passHref>
                <Button>Take me there!</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Page404;
