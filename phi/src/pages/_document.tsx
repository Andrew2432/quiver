import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { ga_id },
} = getConfig();

class MyDocument extends Document {
  googleAnalytics() {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
        />
        <script
          data-ad-client="ca-pub-4659758698348486"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </>
    );
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
