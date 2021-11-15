import { BlogPostType } from '@quiver/types';
import { ThemeProps } from '../../utils/ThemeContext';

export interface BlogSinglePostProps {
  post: BlogPostType;
  theme?: ThemeProps['theme'];
}
