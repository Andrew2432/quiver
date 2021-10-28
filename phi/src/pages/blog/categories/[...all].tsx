import * as React from 'react';
import { GetServerSidePropsContext } from 'next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '../../../utils/fetcher';
import Prism from 'prismjs';

import Layout from '../../../layouts/Layout';
import SEO from '../../../layouts/SEO';
import { Category } from '../../../types/CategoryProps';
import BlogCategories from '../../../components/blog/BlogCategories';
import PageLoading from '../../../utils/PageLoading';

const {
  publicRuntimeConfig: { wp_api_url },
} = getConfig();

interface Props {
  category: Category;
}

const { useEffect } = React;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;
  const slug = all?.[0];
  const response = await fetcher(
    `${wp_api_url}/categories/?slug=${slug as string}`,
  );

  return {
    props: {
      category: response.data[0] as Category,
    },
  };
}

function SinglePostPage({ category }: Props) {
  const router = useRouter();
  const { all } = router.query;
  const slug = all?.[0];

  const { data } = useSWR(
    `${wp_api_url}/categories/?slug=${slug as string}`,
    fetcher,
    { initialData: category },
  );

  useEffect(function () {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  if (!data) return <PageLoading />;

  return (
    <Layout>
      <SEO
        title={`Category: ${category.name}`}
        description={category.description}
      />
      <BlogCategories category={category} slug={slug as string} />
    </Layout>
  );
}

export default SinglePostPage;
