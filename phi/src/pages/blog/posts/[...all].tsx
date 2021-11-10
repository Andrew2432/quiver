import { GetServerSidePropsContext } from 'next';
import BlogSinglePost from '../../../components/blogSinglePost/BlogSinglePost';
import { useSinglePostQuery } from '../../../generated/graphql';
import Layout from '../../../layouts/Layout';
import SEO from '../../../layouts/SEO';
import { BlogPostType } from '../../../newTypes/BlogPostType';
import useAuthorSlug from '../../../utils/hooks/useAuthorSlug.hook';
import PageLoading from '../../../utils/PageLoading';

interface Props {
  postSlug: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;

  const postSlug = all?.[0] as string;

  return {
    props: {
      postSlug,
    } as Props,
  };
}

function SinglePostPage({ postSlug }: Props) {
  const authorSlug = useAuthorSlug();

  const { data, loading, error } = useSinglePostQuery({
    variables: {
      postSlug,
      authorSlug,
    },
  });

  if (loading) return <PageLoading />;

  const post = data?.articles?.[0] as BlogPostType;

  const { title, description } = post;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <BlogSinglePost post={post} />
    </Layout>
  );
}

export default SinglePostPage;
