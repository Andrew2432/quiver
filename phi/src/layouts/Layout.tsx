import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import ThemeContext from '../utils/ThemeContext';

const Header = dynamic(() => import('./header/Header'));
const Footer = dynamic(() => import('./footer/Footer'));

interface Props {
  children?: React.ReactNode;
}

const { useContext } = React;

function Layout({ children }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const bg =
    theme == 'dark'
      ? 'body {background-color: #121212 !important; color: #f7f7f7 !important;}'
      : 'body {background-color: #fff !important; color: #000 !important;}';

  return (
    <>
      <Head>
        <style>{bg}</style>
      </Head>
      <section className={`layout`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
