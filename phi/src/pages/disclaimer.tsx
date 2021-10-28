import Disclaimer from '../components/legal/disclaimer/Disclaimer';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';

function DisclaimerPage() {
  return (
    <Layout>
      <SEO title={`Disclaimer`} description={`Disclaimer page`} />
      <Disclaimer />
    </Layout>
  );
}

export default DisclaimerPage;
