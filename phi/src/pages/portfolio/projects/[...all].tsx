import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import useSWR from 'swr';

import Layout from '../../../layouts/Layout';
import SEO from '../../../layouts/SEO';
import { Project } from '../../../types/ProjectProps';
import fetcher from '../../../utils/fetcher';
import PageLoading from '../../../utils/PageLoading';

const SingleProject = dynamic(
  () => import('../../../components/portfolio/SingleProject'),
  { loading: () => <PageLoading /> },
);

const {
  publicRuntimeConfig: { wp_project_url },
} = getConfig();

interface Props {
  project: Project;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { all },
  } = context;

  const slug = all?.[0];

  const response = await fetcher(
    `${wp_project_url}/projects`,
    JSON.stringify({ project_slug: slug }),
  );

  return {
    props: {
      project: response.data[0] as Project,
    },
  };
}

function SingleProjectPage({ project }: Props) {
  const router = useRouter();
  const { all } = router.query;

  const slug = all?.[0];

  useSWR(
    `${wp_project_url}/projects/?project_slug=${slug as string}`,
    fetcher,
    {
      initialData: project,
    },
  );

  return (
    <Layout>
      <SEO
        title={project.project_title}
        description={project.project_description}
      />
      <SingleProject project={project} />
    </Layout>
  );
}

export default SingleProjectPage;
