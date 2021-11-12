"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSingleProjectLazyQuery = exports.useSingleProjectQuery = exports.SingleProjectDocument = exports.useProjectsCategoryLazyQuery = exports.useProjectsCategoryQuery = exports.ProjectsCategoryDocument = exports.useCategoriesLazyQuery = exports.useCategoriesQuery = exports.CategoriesDocument = exports.useSinglePostLazyQuery = exports.useSinglePostQuery = exports.SinglePostDocument = exports.useBlogSearchPostsLazyQuery = exports.useBlogSearchPostsQuery = exports.BlogSearchPostsDocument = exports.useBlogPostsLazyQuery = exports.useBlogPostsQuery = exports.BlogPostsDocument = exports.useBlogPaginatedSearchLazyQuery = exports.useBlogPaginatedSearchQuery = exports.BlogPaginatedSearchDocument = exports.useBlogPaginatedPostsLazyQuery = exports.useBlogPaginatedPostsQuery = exports.BlogPaginatedPostsDocument = exports.useBlogPaginatedCategoriesPostsLazyQuery = exports.useBlogPaginatedCategoriesPostsQuery = exports.BlogPaginatedCategoriesPostsDocument = exports.useBlogCustomSortedPostsLazyQuery = exports.useBlogCustomSortedPostsQuery = exports.BlogCustomSortedPostsDocument = exports.useBlogCategoriesPostsLazyQuery = exports.useBlogCategoriesPostsQuery = exports.BlogCategoriesPostsDocument = exports.useAboutLazyQuery = exports.useAboutQuery = exports.AboutDocument = exports.ProjectSnapshotPartsFragmentDoc = exports.ProjectPartsFragmentDoc = exports.ProjectMetaPartsFragmentDoc = exports.ImagePartsFragmentDoc = exports.CategoryPartsFragmentDoc = exports.BlogCategoriesPartsFragmentDoc = exports.AuthorPartsFragmentDoc = exports.ArticlePreviousOrNextPartsFragmentDoc = exports.ArticlePartsFragmentDoc = exports.ArticleMetaPartsFragmentDoc = exports.PublicationState = exports.Enum_Project_Category = void 0;
var client_1 = require("@apollo/client");
var Apollo = __importStar(require("@apollo/client"));
var defaultOptions = {};
var Enum_Project_Category;
(function (Enum_Project_Category) {
    Enum_Project_Category["Client"] = "Client";
    Enum_Project_Category["Personal"] = "Personal";
})(Enum_Project_Category = exports.Enum_Project_Category || (exports.Enum_Project_Category = {}));
var PublicationState;
(function (PublicationState) {
    PublicationState["Live"] = "LIVE";
    PublicationState["Preview"] = "PREVIEW";
})(PublicationState = exports.PublicationState || (exports.PublicationState = {}));
exports.ArticleMetaPartsFragmentDoc = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment articleMetaParts on Article {\n  id\n  slug\n  title\n  description\n  excerpt\n  created_at\n  updated_at\n  views\n  hits\n}\n    "], ["\n    fragment articleMetaParts on Article {\n  id\n  slug\n  title\n  description\n  excerpt\n  created_at\n  updated_at\n  views\n  hits\n}\n    "])));
exports.ArticlePartsFragmentDoc = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    fragment articleParts on Article {\n  id\n  slug\n  title\n  description\n  content\n  excerpt\n  created_at\n  updated_at\n  views\n  hits\n}\n    "], ["\n    fragment articleParts on Article {\n  id\n  slug\n  title\n  description\n  content\n  excerpt\n  created_at\n  updated_at\n  views\n  hits\n}\n    "])));
exports.ArticlePreviousOrNextPartsFragmentDoc = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    fragment articlePreviousOrNextParts on Article {\n  id\n  title\n  slug\n}\n    "], ["\n    fragment articlePreviousOrNextParts on Article {\n  id\n  title\n  slug\n}\n    "])));
exports.AuthorPartsFragmentDoc = (0, client_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    fragment authorParts on Writer {\n  name\n}\n    "], ["\n    fragment authorParts on Writer {\n  name\n}\n    "])));
exports.BlogCategoriesPartsFragmentDoc = (0, client_1.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    fragment blogCategoriesParts on Category {\n  name\n  description\n}\n    "], ["\n    fragment blogCategoriesParts on Category {\n  name\n  description\n}\n    "])));
exports.CategoryPartsFragmentDoc = (0, client_1.gql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    fragment categoryParts on Category {\n  name\n  slug\n}\n    "], ["\n    fragment categoryParts on Category {\n  name\n  slug\n}\n    "])));
exports.ImagePartsFragmentDoc = (0, client_1.gql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    fragment imageParts on Article {\n  image {\n    url\n    alternativeText\n    caption\n    width\n    height\n  }\n}\n    "], ["\n    fragment imageParts on Article {\n  image {\n    url\n    alternativeText\n    caption\n    width\n    height\n  }\n}\n    "])));
exports.ProjectMetaPartsFragmentDoc = (0, client_1.gql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    fragment projectMetaParts on Project {\n  id\n  slug\n  title\n  description\n  isTop\n  deployedLink\n}\n    "], ["\n    fragment projectMetaParts on Project {\n  id\n  slug\n  title\n  description\n  isTop\n  deployedLink\n}\n    "])));
exports.ProjectPartsFragmentDoc = (0, client_1.gql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    fragment projectParts on Project {\n  id\n  slug\n  title\n  description\n  content\n  deployedLink\n  githubLink\n  isTop\n  startDate\n  endDate\n  clientName\n  category\n}\n    "], ["\n    fragment projectParts on Project {\n  id\n  slug\n  title\n  description\n  content\n  deployedLink\n  githubLink\n  isTop\n  startDate\n  endDate\n  clientName\n  category\n}\n    "])));
exports.ProjectSnapshotPartsFragmentDoc = (0, client_1.gql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    fragment projectSnapshotParts on UploadFile {\n  url\n  alternativeText\n  caption\n  width\n  height\n}\n    "], ["\n    fragment projectSnapshotParts on UploadFile {\n  url\n  alternativeText\n  caption\n  width\n  height\n}\n    "])));
exports.AboutDocument = (0, client_1.gql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query About($authorSlug: String!) {\n  abouts(where: {author: {slug: $authorSlug}}) {\n    title\n    description\n    technicalSkills(sort: \"order:asc\") {\n      title\n      description\n      skills {\n        name\n        url\n      }\n      currentLearningSkills {\n        name\n        url\n      }\n    }\n    domainSkills(sort: \"order:asc\") {\n      title\n      description\n    }\n    timeline {\n      timelineEvents(sort: \"date:desc\") {\n        event\n        date\n        timelineCategory {\n          tag\n          color\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query About($authorSlug: String!) {\n  abouts(where: {author: {slug: $authorSlug}}) {\n    title\n    description\n    technicalSkills(sort: \"order:asc\") {\n      title\n      description\n      skills {\n        name\n        url\n      }\n      currentLearningSkills {\n        name\n        url\n      }\n    }\n    domainSkills(sort: \"order:asc\") {\n      title\n      description\n    }\n    timeline {\n      timelineEvents(sort: \"date:desc\") {\n        event\n        date\n        timelineCategory {\n          tag\n          color\n        }\n      }\n    }\n  }\n}\n    "])));
/**
 * __useAboutQuery__
 *
 * To run a query within a React component, call `useAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutQuery({
 *   variables: {
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useAboutQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.AboutDocument, options);
}
exports.useAboutQuery = useAboutQuery;
function useAboutLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.AboutDocument, options);
}
exports.useAboutLazyQuery = useAboutLazyQuery;
exports.BlogCategoriesPostsDocument = (0, client_1.gql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    query BlogCategoriesPosts($categorySlug: String!, $authorSlug: String!) {\n  categories(where: {slug: $categorySlug, author: {slug: $authorSlug}}) {\n    ...blogCategoriesParts\n    articles {\n      ...articleMetaParts\n      ...imageParts\n      author {\n        ...authorParts\n      }\n      category {\n        ...categoryParts\n      }\n    }\n  }\n}\n    ", "\n", "\n", "\n", "\n", ""], ["\n    query BlogCategoriesPosts($categorySlug: String!, $authorSlug: String!) {\n  categories(where: {slug: $categorySlug, author: {slug: $authorSlug}}) {\n    ...blogCategoriesParts\n    articles {\n      ...articleMetaParts\n      ...imageParts\n      author {\n        ...authorParts\n      }\n      category {\n        ...categoryParts\n      }\n    }\n  }\n}\n    ", "\n", "\n", "\n", "\n", ""])), exports.BlogCategoriesPartsFragmentDoc, exports.ArticleMetaPartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogCategoriesPostsQuery__
 *
 * To run a query within a React component, call `useBlogCategoriesPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogCategoriesPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogCategoriesPostsQuery({
 *   variables: {
 *      categorySlug: // value for 'categorySlug'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useBlogCategoriesPostsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogCategoriesPostsDocument, options);
}
exports.useBlogCategoriesPostsQuery = useBlogCategoriesPostsQuery;
function useBlogCategoriesPostsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogCategoriesPostsDocument, options);
}
exports.useBlogCategoriesPostsLazyQuery = useBlogCategoriesPostsLazyQuery;
exports.BlogCustomSortedPostsDocument = (0, client_1.gql)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    query BlogCustomSortedPosts($sortString: String!, $limit: Int!, $authorSlug: String!) {\n  articles(sort: $sortString, limit: $limit, where: {author: {slug: $authorSlug}}) {\n    ...articleParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n}\n    ", "\n", "\n", ""], ["\n    query BlogCustomSortedPosts($sortString: String!, $limit: Int!, $authorSlug: String!) {\n  articles(sort: $sortString, limit: $limit, where: {author: {slug: $authorSlug}}) {\n    ...articleParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n}\n    ", "\n", "\n", ""])), exports.ArticlePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogCustomSortedPostsQuery__
 *
 * To run a query within a React component, call `useBlogCustomSortedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogCustomSortedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogCustomSortedPostsQuery({
 *   variables: {
 *      sortString: // value for 'sortString'
 *      limit: // value for 'limit'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useBlogCustomSortedPostsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogCustomSortedPostsDocument, options);
}
exports.useBlogCustomSortedPostsQuery = useBlogCustomSortedPostsQuery;
function useBlogCustomSortedPostsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogCustomSortedPostsDocument, options);
}
exports.useBlogCustomSortedPostsLazyQuery = useBlogCustomSortedPostsLazyQuery;
exports.BlogPaginatedCategoriesPostsDocument = (0, client_1.gql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    query BlogPaginatedCategoriesPosts($offset: Int!, $limit: Int!, $categorySlug: String!, $authorSlug: String!) {\n  categories(start: $offset, limit: $limit, where: {slug: $categorySlug}) {\n    ...blogCategoriesParts\n    articles(where: {author: {slug: $authorSlug}}) {\n      ...articleMetaParts\n      ...imageParts\n      author {\n        ...authorParts\n      }\n      category {\n        ...categoryParts\n      }\n    }\n  }\n  articlesConnection(\n    where: {category: {slug: $categorySlug}, author: {slug: $authorSlug}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n", "\n", "\n", "\n", ""], ["\n    query BlogPaginatedCategoriesPosts($offset: Int!, $limit: Int!, $categorySlug: String!, $authorSlug: String!) {\n  categories(start: $offset, limit: $limit, where: {slug: $categorySlug}) {\n    ...blogCategoriesParts\n    articles(where: {author: {slug: $authorSlug}}) {\n      ...articleMetaParts\n      ...imageParts\n      author {\n        ...authorParts\n      }\n      category {\n        ...categoryParts\n      }\n    }\n  }\n  articlesConnection(\n    where: {category: {slug: $categorySlug}, author: {slug: $authorSlug}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n", "\n", "\n", "\n", ""])), exports.BlogCategoriesPartsFragmentDoc, exports.ArticleMetaPartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogPaginatedCategoriesPostsQuery__
 *
 * To run a query within a React component, call `useBlogPaginatedCategoriesPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPaginatedCategoriesPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPaginatedCategoriesPostsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      categorySlug: // value for 'categorySlug'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useBlogPaginatedCategoriesPostsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogPaginatedCategoriesPostsDocument, options);
}
exports.useBlogPaginatedCategoriesPostsQuery = useBlogPaginatedCategoriesPostsQuery;
function useBlogPaginatedCategoriesPostsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogPaginatedCategoriesPostsDocument, options);
}
exports.useBlogPaginatedCategoriesPostsLazyQuery = useBlogPaginatedCategoriesPostsLazyQuery;
exports.BlogPaginatedPostsDocument = (0, client_1.gql)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query BlogPaginatedPosts($offset: Int!, $limit: Int!, $authorSlug: String!) {\n  articles(start: $offset, limit: $limit, where: {author: {slug: $authorSlug}}) {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n  articlesConnection(where: {author: {slug: $authorSlug}}) {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""], ["\n    query BlogPaginatedPosts($offset: Int!, $limit: Int!, $authorSlug: String!) {\n  articles(start: $offset, limit: $limit, where: {author: {slug: $authorSlug}}) {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n  articlesConnection(where: {author: {slug: $authorSlug}}) {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""])), exports.ArticleMetaPartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogPaginatedPostsQuery__
 *
 * To run a query within a React component, call `useBlogPaginatedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPaginatedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPaginatedPostsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useBlogPaginatedPostsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogPaginatedPostsDocument, options);
}
exports.useBlogPaginatedPostsQuery = useBlogPaginatedPostsQuery;
function useBlogPaginatedPostsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogPaginatedPostsDocument, options);
}
exports.useBlogPaginatedPostsLazyQuery = useBlogPaginatedPostsLazyQuery;
exports.BlogPaginatedSearchDocument = (0, client_1.gql)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    query BlogPaginatedSearch($limit: Int!, $offset: Int!, $query: String!, $authorSlug: String!) {\n  articles(\n    start: $offset\n    limit: $limit\n    where: {_q: $query, author: {slug: $authorSlug}}\n  ) {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n  articlesConnection(where: {_q: $query, author: {slug: $authorSlug}}) {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""], ["\n    query BlogPaginatedSearch($limit: Int!, $offset: Int!, $query: String!, $authorSlug: String!) {\n  articles(\n    start: $offset\n    limit: $limit\n    where: {_q: $query, author: {slug: $authorSlug}}\n  ) {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n  articlesConnection(where: {_q: $query, author: {slug: $authorSlug}}) {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""])), exports.ArticleMetaPartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogPaginatedSearchQuery__
 *
 * To run a query within a React component, call `useBlogPaginatedSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPaginatedSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPaginatedSearchQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      query: // value for 'query'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useBlogPaginatedSearchQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogPaginatedSearchDocument, options);
}
exports.useBlogPaginatedSearchQuery = useBlogPaginatedSearchQuery;
function useBlogPaginatedSearchLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogPaginatedSearchDocument, options);
}
exports.useBlogPaginatedSearchLazyQuery = useBlogPaginatedSearchLazyQuery;
exports.BlogPostsDocument = (0, client_1.gql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    query BlogPosts {\n  articles {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""], ["\n    query BlogPosts {\n  articles {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""])), exports.ArticleMetaPartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogPostsQuery__
 *
 * To run a query within a React component, call `useBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostsQuery({
 *   variables: {
 *   },
 * });
 */
function useBlogPostsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogPostsDocument, options);
}
exports.useBlogPostsQuery = useBlogPostsQuery;
function useBlogPostsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogPostsDocument, options);
}
exports.useBlogPostsLazyQuery = useBlogPostsLazyQuery;
exports.BlogSearchPostsDocument = (0, client_1.gql)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    query BlogSearchPosts($query: String!, $authorSlug: String!) {\n  articles(where: {_q: $query, author: {slug: $authorSlug}}) {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""], ["\n    query BlogSearchPosts($query: String!, $authorSlug: String!) {\n  articles(where: {_q: $query, author: {slug: $authorSlug}}) {\n    ...articleMetaParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n  }\n}\n    ", "\n", "\n", "\n", ""])), exports.ArticleMetaPartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc);
/**
 * __useBlogSearchPostsQuery__
 *
 * To run a query within a React component, call `useBlogSearchPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogSearchPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogSearchPostsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useBlogSearchPostsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BlogSearchPostsDocument, options);
}
exports.useBlogSearchPostsQuery = useBlogSearchPostsQuery;
function useBlogSearchPostsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BlogSearchPostsDocument, options);
}
exports.useBlogSearchPostsLazyQuery = useBlogSearchPostsLazyQuery;
exports.SinglePostDocument = (0, client_1.gql)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    query SinglePost($postSlug: String!, $authorSlug: String!) {\n  articles(where: {slug: $postSlug, author: {slug: $authorSlug}}) {\n    ...articleParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n    previous {\n      ...articlePreviousOrNextParts\n    }\n    next {\n      ...articlePreviousOrNextParts\n    }\n  }\n}\n    ", "\n", "\n", "\n", "\n", ""], ["\n    query SinglePost($postSlug: String!, $authorSlug: String!) {\n  articles(where: {slug: $postSlug, author: {slug: $authorSlug}}) {\n    ...articleParts\n    ...imageParts\n    author {\n      ...authorParts\n    }\n    category {\n      ...categoryParts\n    }\n    previous {\n      ...articlePreviousOrNextParts\n    }\n    next {\n      ...articlePreviousOrNextParts\n    }\n  }\n}\n    ", "\n", "\n", "\n", "\n", ""])), exports.ArticlePartsFragmentDoc, exports.ImagePartsFragmentDoc, exports.AuthorPartsFragmentDoc, exports.CategoryPartsFragmentDoc, exports.ArticlePreviousOrNextPartsFragmentDoc);
/**
 * __useSinglePostQuery__
 *
 * To run a query within a React component, call `useSinglePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useSinglePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSinglePostQuery({
 *   variables: {
 *      postSlug: // value for 'postSlug'
 *      authorSlug: // value for 'authorSlug'
 *   },
 * });
 */
function useSinglePostQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.SinglePostDocument, options);
}
exports.useSinglePostQuery = useSinglePostQuery;
function useSinglePostLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.SinglePostDocument, options);
}
exports.useSinglePostLazyQuery = useSinglePostLazyQuery;
exports.CategoriesDocument = (0, client_1.gql)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n    query Categories {\n  categories {\n    id\n    name\n    slug\n  }\n}\n    "], ["\n    query Categories {\n  categories {\n    id\n    name\n    slug\n  }\n}\n    "])));
/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
function useCategoriesQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.CategoriesDocument, options);
}
exports.useCategoriesQuery = useCategoriesQuery;
function useCategoriesLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.CategoriesDocument, options);
}
exports.useCategoriesLazyQuery = useCategoriesLazyQuery;
exports.ProjectsCategoryDocument = (0, client_1.gql)(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    query ProjectsCategory($category: String!) {\n  projects(where: {category: $category}) {\n    ...projectMetaParts\n    snapshots {\n      ...projectSnapshotParts\n    }\n  }\n}\n    ", "\n", ""], ["\n    query ProjectsCategory($category: String!) {\n  projects(where: {category: $category}) {\n    ...projectMetaParts\n    snapshots {\n      ...projectSnapshotParts\n    }\n  }\n}\n    ", "\n", ""])), exports.ProjectMetaPartsFragmentDoc, exports.ProjectSnapshotPartsFragmentDoc);
/**
 * __useProjectsCategoryQuery__
 *
 * To run a query within a React component, call `useProjectsCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
function useProjectsCategoryQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ProjectsCategoryDocument, options);
}
exports.useProjectsCategoryQuery = useProjectsCategoryQuery;
function useProjectsCategoryLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ProjectsCategoryDocument, options);
}
exports.useProjectsCategoryLazyQuery = useProjectsCategoryLazyQuery;
exports.SingleProjectDocument = (0, client_1.gql)(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    query SingleProject($slug: String!) {\n  projects(where: {slug: $slug}) {\n    ...projectParts\n    snapshots {\n      ...projectSnapshotParts\n    }\n  }\n}\n    ", "\n", ""], ["\n    query SingleProject($slug: String!) {\n  projects(where: {slug: $slug}) {\n    ...projectParts\n    snapshots {\n      ...projectSnapshotParts\n    }\n  }\n}\n    ", "\n", ""])), exports.ProjectPartsFragmentDoc, exports.ProjectSnapshotPartsFragmentDoc);
/**
 * __useSingleProjectQuery__
 *
 * To run a query within a React component, call `useSingleProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProjectQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useSingleProjectQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.SingleProjectDocument, options);
}
exports.useSingleProjectQuery = useSingleProjectQuery;
function useSingleProjectLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.SingleProjectDocument, options);
}
exports.useSingleProjectLazyQuery = useSingleProjectLazyQuery;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;
