import { Container, Typography } from '@mui/material';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import Prism from 'prismjs';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-xml-doc';
import { useEffect } from 'react';

const md = `# Welcome to my blog`;

const codeJava = `
<pre class="language-java">
<code>
  public class Example {
    public static final void main(String[] args) {
      System.out.println("Hello, World");
    }
  }
</code>
</pre>
`;

const codeTS = `
<pre class="language-typescript">
<code>
  class Example {
    main() {
      console.log("Hello");
    }
  }
</code>
</pre>
`;

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'h1',
      },
    },
  },
};

function Blog() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Container>
      <Markdown options={markdownOptions}>{md.concat(codeTS)}</Markdown>
    </Container>
  );
}

export default Blog;
