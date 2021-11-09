import Portfolio from '../../components/portfolio/Portfolio';
import { useProjectsCategoryQuery } from '../../generated/graphql';
import Layout from '../../layouts/Layout';
import SEO from '../../layouts/SEO';
import { ProjectCategory, ProjectType } from '../../newTypes/ProjectType';
import PageLoading from '../../utils/PageLoading';

function PortfolioPage() {
  const {
    data: personalProjectsData,
    loading,
    error,
  } = useProjectsCategoryQuery({
    variables: {
      category: ProjectCategory.PERSONAL,
    },
  });

  if (loading) return <PageLoading />;

  const personalProjects = personalProjectsData?.projects as ProjectType[];
  const clientProjects = [] as ProjectType[];

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
