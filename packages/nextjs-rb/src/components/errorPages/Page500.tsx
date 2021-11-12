import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Page500() {
  return (
    <Container
      className={`text-center my-5`}
      style={{ display: 'grid', placeItems: 'center' }}
    >
      <Row className={`d-flex align-items-center justify-content-center`}>
        <Col>
          <Row className={`my-3`}>
            <Col>
              <h1>An error occurred.</h1>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <Image
                src="/images/errorPages/helping-dog.jpg"
                alt="Helping dog"
                width="400"
                height="400"
              />
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <h2>Have you tried reloading the page?</h2>
              <h4>If that does not work, try again later!</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Page500;
