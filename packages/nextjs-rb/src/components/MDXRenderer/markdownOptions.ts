import { MarkdownToJSX } from 'markdown-to-jsx';
import Code from '../Code';
import CustomImage from '../image/CustomImage';
import Paragraph from '../paragraph/Paragraph';

const markdownOptions: MarkdownToJSX.Options = Object.freeze({
  overrides: {
    Code: {
      component: Code,
    },
    img: {
      component: CustomImage,
    },
    p: {
      component: Paragraph,
    },
  },
});

export default markdownOptions;
