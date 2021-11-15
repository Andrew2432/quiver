import * as React from 'react';
import ThemeContext from '../../utils/ThemeContext';
import BlogCategoriesList from '../BlogCategoriesList';
import BlogMostViewedPosts from '../BlogMostViewedPosts';
import BlogSearch from '../BlogSearch';

const { useContext } = React;

function BlogSidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <BlogSearch theme={theme} />
      <BlogMostViewedPosts theme={theme} />
      <BlogCategoriesList theme={theme} />
    </>
  );
}

export default BlogSidebar;
