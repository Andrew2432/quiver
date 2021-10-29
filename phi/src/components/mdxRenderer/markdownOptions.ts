import { MarkdownToJSX } from "markdown-to-jsx";
import Code from "../code/Code";

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    Code: {
      component: Code,
    },
  },
};

export default markdownOptions;
