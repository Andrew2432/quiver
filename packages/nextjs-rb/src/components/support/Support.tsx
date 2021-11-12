import * as React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const { useEffect } = React;

function SupportIntro() {
  return (
    <>
      <Row className={`text-center my-2`}>
        <Col>
          <h1>
            <strong>Support Me</strong>
          </h1>
        </Col>
      </Row>
      <Row className={`text-center my-2`}>
        <Col>
          <h5>
            Your donations helps me to keep this site up and running and
            motivate me to post helpful articles and tutorials.
          </h5>
        </Col>
      </Row>
      <Row className={`text-center my-2`}>
        <Col>
          <h5>You can choose any of the following donation methods below:</h5>
        </Col>
      </Row>
    </>
  );
}

function SupportMethods() {
  return (
    <>
      <Row>
        <Col className={`my-4 text-center`}>
          <h3>
            Buy a cup of coffee for me <span>☕</span>
          </h3>
          <h4>Just ₹10 only!</h4>
          <form id="donateForm"></form>
        </Col>
      </Row>
      <Row>
        <Col className={`my-4 text-center`}>
          <h3>Donate any amount of money</h3>
          <a href="https://rzp.io/l/FZAVEtK" target="_blank">
            <Button>
              <FontAwesomeIcon icon={faDonate} /> Pay with Razorpay
            </Button>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className={`my-4 text-center`}>
          <h3>Donate Bitcoin</h3>
          <h5>
            <Row className={`align-items-center justify-content-center`}>
              <Col lg={12} sm={12} xs={12} className={`my-1`}>
                <a
                  href="https://blockstream.info/address/bc1q2ycpn5sfezwrpwtwx524q38pkk6khp50v8gdsw9l3hd9wk2k7wtswx4h9a"
                  target="_blank"
                >
                  <Button>
                    <FontAwesomeIcon icon={faBitcoin} size="1x" /> Donate
                    Bitcoins
                  </Button>
                </a>
              </Col>
            </Row>
          </h5>
        </Col>
      </Row>
      <Row className={`my-3`}>
        <Col className={`text-center`}>
          <h5>
            NOTE: Please read the{' '}
            <Link href="/disclaimer#refund" passHref>
              refund policy
            </Link>{' '}
            before donating.
          </h5>
        </Col>
      </Row>
    </>
  );
}

function Support() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rzpScript = document.createElement('script');
      const rzpForm = document.querySelector('#donateForm');

      if (!rzpForm) return;

      rzpScript.setAttribute(
        'src',
        'https://checkout.razorpay.com/v1/payment-button.js',
      );
      rzpScript.setAttribute('data-payment_button_id', 'pl_HdTC13RMT8P0Rw');
      rzpForm.appendChild(rzpScript);
    }
  }, []);

  return (
    <Container className={`my-3`}>
      <SupportIntro />
      <SupportMethods />
    </Container>
  );
}

export default Support;
