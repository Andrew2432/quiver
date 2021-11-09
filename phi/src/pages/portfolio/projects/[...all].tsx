import { GetServerSidePropsContext } from 'next';
import SingleProject from '../../../components/singleProject/SingleProject';
import { useSingleProjectQuery } from '../../../generated/graphql';
import Layout from '../../../layouts/Layout';
import SEO from '../../../layouts/SEO';
import { ProjectType } from '../../../newTypes/ProjectType';
import PageLoading from '../../../utils/PageLoading';

interface Props {
  slug: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;

  const slug = all?.[0];

  return {
    props: {
      slug,
    },
  };
}

function SingleProjectPage({ slug }: Props) {
  const { data, loading, error } = useSingleProjectQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <PageLoading />;

  const project = data?.projects?.[0] as ProjectType;

  return (
    <Layout>
      <SEO title={project.title} description={project.description} />
      <SingleProject project={project} />
    </Layout>
  );
}

export default SingleProjectPage;
