import Support from '../../components/support/Support';
import Layout from '../../layouts/Layout';
import SEO from '../../layouts/SEO';

function SupportPage() {
  return (
    <Layout>
      <SEO
        title="Support Me"
        description="Support my work through fiat and crypto donations!"
      />
      <Support />
    </Layout>
  );
}

export default SupportPage;
