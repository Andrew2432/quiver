import { MarkdownToJSX } from "markdown-to-jsx";
import Code from "../code/Code";
import CustomImage from "../image/CustomImage";

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    Code: {
      component: Code,
    },
    img: {
      component: CustomImage,
    },
  },
};

export default markdownOptions;
