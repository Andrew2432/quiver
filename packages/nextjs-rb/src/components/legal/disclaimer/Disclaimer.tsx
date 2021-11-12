import * as React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ThemeContext from '../../../utils/ThemeContext';

const { useContext } = React;

function Disclaimer() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className={`bg-${theme} my-5 p-2`}>
      <Row className={`my-2 p-2`}>
        <Col>
          <Row className={`text-center my-2 p-2`}>
            <Col>
              <h1>DISCLAIMER</h1>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <p>
                If you require any more information or have any questions about
                our site's disclaimer, please feel free to contact us through
                our{' '}
                <Link href={`/contact`} passHref>
                  Contact Page
                </Link>
                .
              </p>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <h4>
                <strong>Disclaimers for Andrew Joel</strong>
              </h4>{' '}
              <p>
                All the information on this website -{' '}
                <a href={`https://andrew-joel.com`} rel={`noopener noreferrer`}>
                  https://andrew-joel.com
                </a>{' '}
                - is published in good faith and for general information purpose
                only. Andrew Joel does not make any warranties about the
                completeness, reliability and accuracy of this information. Any
                action you take upon the information you find on this website
                (Andrew Joel), is strictly at your own risk. Andrew Joel will
                not be liable for any losses and/or damages in connection with
                the use of our website.
                <br />
                <br />
                From our website, you can visit other websites by following
                hyperlinks to such external sites. While we strive to provide
                only quality links to useful and ethical websites, we have no
                control over the content and nature of these sites. These links
                to other websites do not imply a recommendation for all the
                content found on these sites. Site owners and content may change
                without notice and may occur before we have the opportunity to
                remove a link which may have gone 'bad'.
                <br />
                <br />
                Please be also aware that when you leave our website, other
                sites may have different privacy policies and terms which are
                beyond our control. Please be sure to check the Privacy Policies
                of these sites as well as their "Terms of Service" before
                engaging in any business or uploading any information.
              </p>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <h4>
                <strong>Consent</strong>
              </h4>
              <p>
                By using our website, you hereby consent to our disclaimer and
                agree to its terms.
              </p>
            </Col>
          </Row>
          <Row className={`my-3`} id="refund">
            <Col>
              <h4>
                <strong>Refund Policy</strong>
              </h4>
              <p>
                You can contact for refund using our{' '}
                <Link href="/contact" passHref>
                  contact page
                </Link>
                . I will respond as soon as possible. <br />
                Before submitting a refund request, read the following rules
                carefully.
              </p>
              <p>
                <ul className={`mx-3`}>
                  <li>
                    100% refund of donation is eligible when donation exceeds
                    Rs. 100 and a request for refund is initiated within 2 days
                    of transaction.
                  </li>
                  <li>
                    50% refund of donation is eligible when donation exceeds Rs.
                    100 and a request for refund is initiated between 2-4 days
                    of transaction.
                  </li>
                  <li>
                    No refund for any amount of transaction after 4 days of
                    transaction.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <h4>
                <strong>Update</strong>
              </h4>
              <p>
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
              </p>
            </Col>
          </Row>
          <Row className={`my-3`}>
            <Col>
              <h4>
                If you made it this far, then congrats mate! You a real fam 😘.
                Have a good day! 😊
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Disclaimer;
