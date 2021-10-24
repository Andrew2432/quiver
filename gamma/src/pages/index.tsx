import Home from '../components/home/Home';
import Layout from '../layout/layout/Layout';
import SEO from '../layout/seo/SEO';

function HomePage() {
  return (
    <Layout>
      <>
        <SEO title="Home Page" description="Home page" />
        <Home />
      </>
    </Layout>
  );
}

export default HomePage;
