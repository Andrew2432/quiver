import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { ThemeProps } from '../../utils/ThemeContext';

interface Props {
  theme: ThemeProps['theme'];
}

function HomeContact({ theme }: Props) {
  return (
    <Container fluid className={`bg-${theme} text-center`}>
      <Row className={`my-5 py-3`}>
        <Col>
          <Row className={`my-3`}>
            <Col>
              <h3>
                I look forward to work with you and create innovative products
                and awesome experiences!
              </h3>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <Link href={`/contact`} passHref>
                <Button variant="success">
                  <h5>
                    <strong>I'm interested!</strong>
                  </h5>
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContact;
