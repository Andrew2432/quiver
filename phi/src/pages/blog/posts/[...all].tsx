import { GetServerSidePropsContext } from "next";
import BlogSinglePost from "../../../components/blogSinglePost/BlogSinglePost";
import { useSinglePostQuery } from "../../../generated/graphql";
import Layout from "../../../layouts/Layout";
import SEO from "../../../layouts/SEO";
import { BlogPostType } from "../../../newTypes/BlogPostType";
import PageLoading from "../../../utils/PageLoading";

interface Props {
  slug: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;

  const slug = all?.[0] as string;

  return {
    props: {
      slug,
    } as Props,
  };
}

function SinglePostPage({ slug }: Props) {
  const { data, loading, error } = useSinglePostQuery({
    variables: {
      slug,
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
