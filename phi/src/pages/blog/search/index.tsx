import * as React from 'react';
import { useRouter } from 'next/router';
import Prism from 'prismjs';

import Layout from '../../../layouts/Layout';
import SEO from '../../../layouts/SEO';
import BlogSearchResults from '../../../components/blog/BlogSearchResults';

const { useEffect } = React;

function PostsSearchPage() {
  const router = useRouter();
  const { query } = router.query;

  useEffect(function () {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Layout>
      <SEO
        title={`Search Results`}
        description={`Search results for query ${query}`}
      />
      <BlogSearchResults query={query as string} />
    </Layout>
  );
}

export default PostsSearchPage;
