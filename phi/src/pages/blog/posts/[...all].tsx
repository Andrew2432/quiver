import * as React from 'react';
import { GetServerSidePropsContext } from 'next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '../../../utils/fetcher';

import Layout from '../../../layouts/Layout';
import SEO from '../../../layouts/SEO';
import { BlogPost } from '../../../types/BlogProps';
import SinglePost from '../../../components/blog/SinglePost';
import PageLoading from '../../../utils/PageLoading';

const {
  publicRuntimeConfig: { wp_api_url },
} = getConfig();

interface Props {
  post: BlogPost;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;
  const slug = all?.[0];

  const response = await fetcher(
    `${wp_api_url}/posts/?_embed&slug=${slug as string}`,
  );

  return {
    props: {
      post: response.data[0] as BlogPost,
    },
  };
}

function SinglePostPage({ post }: Props) {
  const router = useRouter();
  const { all } = router.query;
  const slug = all?.[0];

  const { data } = useSWR(
    `${wp_api_url}/posts/?_embed&slug=${slug as string}`,
    fetcher,
    { initialData: post },
  );

  if (!data) return <PageLoading />;

  return (
    <Layout>
      <SEO
        title={post.title.rendered as string}
        description={post.excerpt.rendered as string}
      />
      <SinglePost post={post} />
    </Layout>
  );
}

export default SinglePostPage;
