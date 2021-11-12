import dynamic from "next/dynamic";

import Layout from "../../layouts/Layout";
import SEO from "../../layouts/SEO";

const Contact = dynamic(() => import("../../components/contact/Contact"));

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" description="Contact page" />
      <Contact />
    </Layout>
  );
}

export default ContactPage;
