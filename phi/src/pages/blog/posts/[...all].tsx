import { useRouter } from "next/router";
import SinglePost from "../../../components/blog/SinglePost";
import { useSinglePostQuery } from "../../../generated/graphql";
import Layout from "../../../layouts/Layout";
import SEO from "../../../layouts/SEO";
import { BlogPostType } from "../../../newTypes/BlogPostType";
import PageLoading from "../../../utils/PageLoading";

interface Props {
  post: BlogPostType;
  loading: boolean;
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const {
//     query: { all },
//   } = context;

//   if (all === undefined) {
//     return {
//       props: null,
//     };
//   }

//   const slug = all[0];

//   const response = useSinglePostQuery({
//     variables: {
//       slug,
//     },
//   });

//   return {
//     props: {
//       post: response.data as BlogPostType,
//       loading: response.loading,
//     },
//   };
// }

function SinglePostPage() {
  const router = useRouter();
  const {
    query: { all },
  } = router;

  if (all === undefined) {
    return null;
  }

  const slug = all[0];

  const { data, loading, error } = useSinglePostQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <PageLoading />;

  const post = (data?.articles as BlogPostType[])[0];

  const { title, description } = post;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <SinglePost post={post} />
    </Layout>
  );
}

export default SinglePostPage;
