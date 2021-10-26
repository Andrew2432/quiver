import Blog from '../components/blog/Blog';
import Layout from '../layout/layout/Layout';
import SEO from '../layout/seo/SEO';

function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" description="Blog Page">
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
        />
      </SEO>
      <Blog />
    </Layout>
  );
}

export default BlogPage;
