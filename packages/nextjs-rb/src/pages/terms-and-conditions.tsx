import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import TermsAndConditions from '../components/legal/termsAndConditions/TermsAndConditions';

function TermsAndConditionsPage() {
  return (
    <Layout>
      <SEO
        title={`Terms and Conditions`}
        description={`Terms and conditions`}
      />
      <TermsAndConditions />
    </Layout>
  );
}

export default TermsAndConditionsPage;
