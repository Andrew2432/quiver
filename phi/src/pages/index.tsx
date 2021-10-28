import dynamic from 'next/dynamic';

import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import PageLoading from '../utils/PageLoading';

const Home = dynamic(() => import('../components/home/Home'), {
  loading: () => <PageLoading />,
});

function HomePage() {
  const description =
    'Welcome to my site! I am Andrew Joel and I am a professional web developer. I develop web applications, including both client side and server side applications. Everyday I learn new stuff and I share it here. So do visit my site often to know more about me.';

  return (
    <Layout>
      <SEO title="Home" description={description} />
      <Home />
    </Layout>
  );
}

export default HomePage;
