import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import useSWR from 'swr';

import Layout from '../../layouts/Layout';
import SEO from '../../layouts/SEO';
import { Project } from '../../types/ProjectProps';
import fetcher from '../../utils/fetcher';
import PageLoading from '../../utils/PageLoading';

const Portfolio = dynamic(
  () => import('../../components/portfolio/Portfolio'),
  { loading: () => <PageLoading /> },
);

const {
  publicRuntimeConfig: { wp_project_url },
} = getConfig();

interface Props {
  clientProjects: Project[] | null;
  personalProjects: Project[] | null;
}

export async function getServerSideProps() {
  const responsePersonalProjects = await fetcher(
    `${wp_project_url}/projects`,
    JSON.stringify({ page: 1, per_page: 6, project_type: 'Personal Project' }),
  );

  const responseClientProjects = await fetcher(
    `${wp_project_url}/projects`,
    JSON.stringify({ page: 1, per_page: 6, project_type: 'Client Project' }),
  );

  return {
    props: {
      clientProjects: responseClientProjects.data
        ? (responseClientProjects.data as Project[])
        : null,
      personalProjects: responsePersonalProjects.data
        ? (responsePersonalProjects.data as Project[])
        : null,
    },
  };
}

function PortfolioPage({ clientProjects, personalProjects }: Props) {
  const { data: personalProjectsData } = useSWR(
    `${wp_project_url}/projects/1`,
    () =>
      fetcher(
        `${wp_project_url}/projects`,
        JSON.stringify({
          page: 1,
          per_page: 6,
          project_type: 'Personal Project',
        }),
      ),
    {
      initialData: personalProjects,
    },
  );

  const { data: clientProjectsData } = useSWR(
    `${wp_project_url}/projects/2`,
    () =>
      fetcher(
        `${wp_project_url}/projects`,
        JSON.stringify({
          page: 1,
          per_page: 6,
          project_type: 'Client Project',
        }),
      ),
    {
      initialData: clientProjects,
    },
  );

  if (!personalProjectsData && !clientProjectsData) return <PageLoading />;

  return (
    <Layout>
      <SEO title="Portfolio" description="My portfolio" />
      <Portfolio
        personalProjects={personalProjects}
        clientProjects={clientProjects}
      />
    </Layout>
  );
}

export default PortfolioPage;
