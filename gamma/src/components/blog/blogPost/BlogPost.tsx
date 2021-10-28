import { Container, Typography } from '@mui/material';
import RenderPost from '../renderPost/RenderPost';
import { BlogPostProps } from '../types/BlogPostProps';
import useBlogPostStyle from './useBlogPostStyle';

function BlogPost({ post }: BlogPostProps) {
  const { title } = post;
  const styles = useBlogPostStyle();

  return (
    <Container>
      <Typography variant="h4" className={styles.heading}>
        {title}
      </Typography>
      <RenderPost post={post} />
    </Container>
  );
}

export default BlogPost;
