import { Box } from '@mui/system';
import Markdown from 'markdown-to-jsx';
import usePrism from '../../../utils/hooks/usePrism.hook';
import { BlogPostProps } from '../types/BlogPostProps';
import markdownOptions from './markdownOptions';

function RenderPost({ post }: BlogPostProps) {
  const { content } = post;

  usePrism();

  return (
    <Box>
      <Markdown options={markdownOptions}>{content}</Markdown>
    </Box>
  );
}

export default RenderPost;
