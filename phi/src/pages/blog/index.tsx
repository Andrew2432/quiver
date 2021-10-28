import dynamic from 'next/dynamic';

import Layout from '../../layouts/Layout';
import SEO from '../../layouts/SEO';
import PageLoading from '../../utils/PageLoading';

const Blog = dynamic(() => import('../../components/blog/Blog'), {
  loading: () => <PageLoading />,
});

function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" description="Blog" />
      <Blog />
    </Layout>
  );
}

export default BlogPage;
