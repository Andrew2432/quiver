import { MarkdownToJSX } from "markdown-to-jsx";
import Code from "../Code/Code";

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    Code: {
      component: Code,
    },
  },
};

export default markdownOptions;
