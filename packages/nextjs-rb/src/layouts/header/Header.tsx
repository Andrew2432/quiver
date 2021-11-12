import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Nav, Navbar, Container } from 'react-bootstrap';

import ThemeContext from '../../utils/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const { useContext } = React;

function Header(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const currentPage = router.pathname;

  function highlightLink(path: string): React.CSSProperties {
    if (currentPage === '/' && path === '/') {
      return {
        fontWeight: 'bold',
        color: theme === 'light' ? '#000' : '#fff',
      };
    }

    if (currentPage.slice(1).includes(path.slice(1)) && !path.startsWith('/')) {
      return {
        fontWeight: 'bold',
        color: theme === 'light' ? '#000' : '#fff',
      };
    }

    return {
      fontWeight: 'normal',
    };
  }

  return (
    <Navbar
      bg={theme}
      variant={theme}
      expand="lg"
      fixed="top"
      className={`border-bottom border-${theme === 'light' ? 'dark' : 'light'}`}
    >
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="/">
            <h3>
              <strong>Andrew Joel</strong>
            </h3>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/" passHref>
              <Nav.Link href="/" className={`mx-1`}>
                <span style={highlightLink('/')}>Home</span>
              </Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link href="/about" className={`mx-1`}>
                <span style={highlightLink('about')}>About</span>
              </Nav.Link>
            </Link>
            <Link href="/portfolio" passHref>
              <Nav.Link href="/portfolio" className={`mx-1`}>
                <span style={highlightLink('portfolio')}>Portfolio</span>
              </Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link href="/blog" className={`mx-1`}>
                <span style={highlightLink('blog')}>Blog</span>
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link href="/contact" className={`mx-1`}>
                <span style={highlightLink('contact')}>Contact</span>
              </Nav.Link>
            </Link>
            <Link href="/support" passHref>
              <Nav.Link href="/support" className={`mx-1`}>
                <span style={highlightLink('support')}>Support</span>
              </Nav.Link>
            </Link>
            <ThemeSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
