import { Container } from '@mui/material';
import SafeKeyedChildren from '../../../utils/components/SafeKeyedChildren/SafeKeyedChildren';
import BlogPost from '../blogPost/BlogPost';
import { BlogPostsProps } from '../types/BlogPostsProps';
import { BlogPostType } from '../types/BlogPostType';

function createPosts(post: BlogPostType) {
  return <BlogPost post={post} />;
}

function BlogPosts(props: BlogPostsProps) {
  const { posts } = props;

  return (
    <Container>
      <SafeKeyedChildren list={posts} transformer={createPosts} />
    </Container>
  );
}

export default BlogPosts;
