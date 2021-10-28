import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import Page404 from '../components/errorPages/Page404';

function Custom404Page() {
  return (
    <Layout>
      <SEO
        title="404 Page not found"
        description="Sorry, the page you are looking for is not available"
      />
      <Page404 />
    </Layout>
  );
}

export default Custom404Page;
