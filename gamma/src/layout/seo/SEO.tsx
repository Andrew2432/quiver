import Head from 'next/head';
import { SEOProps } from './SEOProps';

function SEO(seoProps: SEOProps) {
  const { title, description } = seoProps;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

export default SEO;
