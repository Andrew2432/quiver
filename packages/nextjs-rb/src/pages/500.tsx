import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import Page500 from '../components/errorPages/Page500';

function Custom500Page() {
  return (
    <Layout>
      <SEO
        title="500 Internal server error"
        description="An error occurred in our server. Please try again"
      />
      <Page500 />
    </Layout>
  );
}

export default Custom500Page;
