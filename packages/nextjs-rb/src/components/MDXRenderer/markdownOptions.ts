import { MarkdownToJSX } from 'markdown-to-jsx';
import Code from '../Code';
import CustomImage from '../CustomImage';
import Paragraph from '../Paragraph';

const markdownOptions: MarkdownToJSX.Options = {
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
};

export default markdownOptions;
