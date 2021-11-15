import {
  Article,
  BlogPaginatedPostsQuery,
  useBlogPaginatedPostsQuery,
} from '@quiver/graphql-client';
import { BlogPostType, GenericConnectionType } from '@quiver/types';
import Blog, { BlogProps } from '../../components/Blog';
import CustomPagination from '../../components/customPagination/CustomPagination';
import { CustomPaginationProps } from '../../components/customPagination/CustomPaginationProps';
import useCustomPagination from '../../components/customPagination/useCustomPagination.hook';
import Layout from '../../layouts/Layout';
import SEO, { SEOProps } from '../../layouts/SEO';
import useAuthorSlug from '../../utils/hooks/useAuthorSlug.hook';
import PageLoading from '../../utils/PageLoading';

function BlogPage() {
  const authorSlug = useAuthorSlug();

  const {
    data,
    loading,
    error,
    cursorRef,
    handlePaginationClick,
  } = useCustomPagination<BlogPaginatedPostsQuery>({
    useHook: useBlogPaginatedPostsQuery,
    variables: {
      authorSlug,
    },
  });

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];
  const {
    aggregate: { count: totalItems },
  } = data?.articlesConnection as GenericConnectionType<Article>;

  const seoProps: SEOProps = {
    title: 'Blog',
    description: 'Blog posts',
  };

  const blogProps: BlogProps = {
    posts,
  };

  const customPaginationProps: CustomPaginationProps = {
    handlePaginationClick,
    cursorRef,
    totalItems,
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <Blog {...blogProps}>
        <CustomPagination {...customPaginationProps} />
      </Blog>
    </Layout>
  );
}

export default BlogPage;
