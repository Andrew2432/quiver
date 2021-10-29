import * as React from "react";
import ThemeContext from "../../utils/ThemeContext";
import BlogCategoriesList from "../blogCategoriesList/BlogCategoriesList";
import BlogLatestPosts from "../blogLatestPosts/BlogLatestPosts";
import BlogSearch from "../blogSearch/BlogSearch";

const { useContext } = React;

function BlogSidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <BlogSearch theme={theme} />
      <BlogLatestPosts theme={theme} />
      <BlogCategoriesList theme={theme} />
    </>
  );
}

export default BlogSidebar;
