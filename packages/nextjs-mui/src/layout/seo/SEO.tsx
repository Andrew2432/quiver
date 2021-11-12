import Head from 'next/head';
import { SEOProps } from './SEOProps';

function SEO(seoProps: SEOProps) {
  const { title, description, children } = seoProps;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  );
}

export default SEO;
