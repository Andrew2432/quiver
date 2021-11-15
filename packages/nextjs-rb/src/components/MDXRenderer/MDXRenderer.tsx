import Markdown from 'markdown-to-jsx';
import { MDXRendererProps } from '.';
import usePrism from '../../utils/hooks/usePrism.hook';
import markdownOptions from './markdownOptions';

function MDXRenderer({ content }: MDXRendererProps) {
  usePrism();

  return <Markdown options={markdownOptions}>{content}</Markdown>;
}

export default MDXRenderer;
