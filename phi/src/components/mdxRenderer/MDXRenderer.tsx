import Markdown from "markdown-to-jsx";
import usePrism from "../../utils/hooks/usePrism.hook";
import markdownOptions from "./markdownOptions";

interface Props {
  content: string;
}

function MDXRenderer({ content }: Props) {
  usePrism();

  return <Markdown options={markdownOptions}>{content}</Markdown>;
}

export default MDXRenderer;
