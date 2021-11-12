import About from '../../components/about/About';
import { useAboutQuery } from '../../generated/graphql';
import Layout from '../../layouts/Layout';
import SEO from '../../layouts/SEO';
import { AboutType } from '../../newTypes/AboutType';
import useAuthorSlug from '../../utils/hooks/useAuthorSlug.hook';
import PageLoading from '../../utils/PageLoading';

function AboutPage() {
  const authorSlug = useAuthorSlug();

  const { data, loading, error } = useAboutQuery({
    variables: {
      authorSlug,
    },
  });

  if (loading) return <PageLoading />;

  const aboutData = data?.abouts?.[0] as AboutType;

  console.log(aboutData);

  return (
    <Layout>
      <SEO title="About Me" description="Get to know more about me" />
      <About data={aboutData} />
    </Layout>
  );
}

export default AboutPage;
