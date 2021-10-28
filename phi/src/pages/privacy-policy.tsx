import PrivacyPolicy from '../components/legal/privacyPolicy/PrivacyPolicy';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';

function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title={`Privacy Policy`} description={`Privacy Policy`} />
      <PrivacyPolicy />
    </Layout>
  );
}

export default PrivacyPolicyPage;
