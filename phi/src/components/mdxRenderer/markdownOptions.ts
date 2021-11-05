import { MarkdownToJSX } from "markdown-to-jsx";
import Code from "../code/Code";
import CustomImage from "../image/CustomImage";
import Paragraph from "../paragraph/Paragraph";

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
