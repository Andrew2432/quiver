import * as React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

import { SEOProps as Props } from '../types/SEOProps';

const {
  publicRuntimeConfig: { base_url },
} = getConfig();

const { useState, useEffect } = React;

function Preload(): JSX.Element {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/hack/Hack-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/hack/Hack-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/hack/Hack-Italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/hack/Hack-BoldItalic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/source_sans_pro/SourceSansPro-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link rel="preconnect" href="https://wordpress.andrew-joel.com" />
      <link rel="preconnect" href="https://googletagmanager.com" />
      <link rel="preconnect" href="https://googleanalytics.com" />
      <link rel="dns-prefetch" href="https://wordpress.andrew-joel.com" />
      <link rel="dns-prefetch" href="https://googletagmanager.com" />
      <link rel="dns-prefetch" href="https://googleanalytics.com" />
    </>
  );
}

function FavIcons() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/icons/site.webmanifest" />
    </>
  );
}

function SEO(props: Props): JSX.Element {
  const { title, description } = props;
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const mainTitle = `${title} | Andrew Joel`;
  const mainImage = `${base_url}/images/bg/hero-compressed.jpg`;
  const mainDescription = description.replace('<p>', '').replace('</p>', '');

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Preload />
      <FavIcons />
      <meta name="description" content={description} />
      <title>{mainTitle}</title>
      <link rel="canonical" href={currentUrl} />
      {/*OG meta tags*/}
      <meta property="og:title" content={mainTitle} />
      <meta property="og:description" content={mainDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={mainImage} key="og:image" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_IN" />
      {/*Twitter meta tags*/}
      <meta property="twitter:card" content={mainDescription} />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={mainTitle} />
      <meta property="twitter:description" content={mainDescription} />
      <meta property="twitter:image" content={mainImage} />
    </Head>
  );
}

export default SEO;
