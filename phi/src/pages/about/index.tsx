import dynamic from "next/dynamic";
import SEO from "../../layouts/SEO";
import Layout from "../../layouts/Layout";

const About = dynamic(() => import("../../components/about/About"));

function AboutPage() {
  return (
    <Layout>
      <SEO title="About Me" description="Get to know more about me" />
      <About />
    </Layout>
  );
}

export default AboutPage;
