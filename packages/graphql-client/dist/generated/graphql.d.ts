import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** The `Long` scalar type represents 52-bit integers */
    Long: any;
    /** A time string with format: HH:mm:ss.SSS */
    Time: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare type About = {
    __typename?: 'About';
    author?: Maybe<Writer>;
    created_at: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    domainSkills?: Maybe<Array<Maybe<DomainSkills>>>;
    id: Scalars['ID'];
    published_at?: Maybe<Scalars['DateTime']>;
    technicalSkills?: Maybe<Array<Maybe<TechinalSkills>>>;
    timeline?: Maybe<AuthorTimeline>;
    title?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type AboutDomainSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type AboutTechnicalSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type AboutAggregator = {
    __typename?: 'AboutAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type AboutConnection = {
    __typename?: 'AboutConnection';
    aggregate?: Maybe<AboutAggregator>;
    groupBy?: Maybe<AboutGroupBy>;
    values?: Maybe<Array<Maybe<About>>>;
};
export declare type AboutConnectionAuthor = {
    __typename?: 'AboutConnectionAuthor';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type AboutConnectionCreated_At = {
    __typename?: 'AboutConnectionCreated_at';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type AboutConnectionDescription = {
    __typename?: 'AboutConnectionDescription';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type AboutConnectionId = {
    __typename?: 'AboutConnectionId';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type AboutConnectionPublished_At = {
    __typename?: 'AboutConnectionPublished_at';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type AboutConnectionTimeline = {
    __typename?: 'AboutConnectionTimeline';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type AboutConnectionTitle = {
    __typename?: 'AboutConnectionTitle';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type AboutConnectionUpdated_At = {
    __typename?: 'AboutConnectionUpdated_at';
    connection?: Maybe<AboutConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type AboutGroupBy = {
    __typename?: 'AboutGroupBy';
    author?: Maybe<Array<Maybe<AboutConnectionAuthor>>>;
    created_at?: Maybe<Array<Maybe<AboutConnectionCreated_At>>>;
    description?: Maybe<Array<Maybe<AboutConnectionDescription>>>;
    id?: Maybe<Array<Maybe<AboutConnectionId>>>;
    published_at?: Maybe<Array<Maybe<AboutConnectionPublished_At>>>;
    timeline?: Maybe<Array<Maybe<AboutConnectionTimeline>>>;
    title?: Maybe<Array<Maybe<AboutConnectionTitle>>>;
    updated_at?: Maybe<Array<Maybe<AboutConnectionUpdated_At>>>;
};
export declare type AboutInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    domainSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    published_at?: Maybe<Scalars['DateTime']>;
    technicalSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    timeline?: Maybe<Scalars['ID']>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type AboutPage = {
    __typename?: 'AboutPage';
    author?: Maybe<Writer>;
    created_at: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    domainSkills?: Maybe<Array<Maybe<DomainSkills>>>;
    id: Scalars['ID'];
    published_at?: Maybe<Scalars['DateTime']>;
    techinalSkills?: Maybe<Array<Maybe<TechinalSkills>>>;
    title?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type AboutPageDomainSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type AboutPageTechinalSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type AboutPageInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    domainSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    published_at?: Maybe<Scalars['DateTime']>;
    techinalSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type AdminUser = {
    __typename?: 'AdminUser';
    firstname: Scalars['String'];
    id: Scalars['ID'];
    lastname: Scalars['String'];
    username?: Maybe<Scalars['String']>;
};
export declare type Article = {
    __typename?: 'Article';
    author?: Maybe<Writer>;
    category?: Maybe<Category>;
    content: Scalars['String'];
    created_at: Scalars['DateTime'];
    description: Scalars['String'];
    excerpt: Scalars['String'];
    hits?: Maybe<Scalars['Long']>;
    id: Scalars['ID'];
    image?: Maybe<UploadFile>;
    next?: Maybe<Article>;
    previous?: Maybe<Article>;
    published_at?: Maybe<Scalars['DateTime']>;
    slug: Scalars['String'];
    title: Scalars['String'];
    updated_at: Scalars['DateTime'];
    views?: Maybe<Scalars['Long']>;
};
export declare type ArticleAggregator = {
    __typename?: 'ArticleAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type ArticleConnection = {
    __typename?: 'ArticleConnection';
    aggregate?: Maybe<ArticleAggregator>;
    groupBy?: Maybe<ArticleGroupBy>;
    values?: Maybe<Array<Maybe<Article>>>;
};
export declare type ArticleConnectionAuthor = {
    __typename?: 'ArticleConnectionAuthor';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionCategory = {
    __typename?: 'ArticleConnectionCategory';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionContent = {
    __typename?: 'ArticleConnectionContent';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ArticleConnectionCreated_At = {
    __typename?: 'ArticleConnectionCreated_at';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type ArticleConnectionDescription = {
    __typename?: 'ArticleConnectionDescription';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ArticleConnectionExcerpt = {
    __typename?: 'ArticleConnectionExcerpt';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ArticleConnectionHits = {
    __typename?: 'ArticleConnectionHits';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionId = {
    __typename?: 'ArticleConnectionId';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionImage = {
    __typename?: 'ArticleConnectionImage';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionNext = {
    __typename?: 'ArticleConnectionNext';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionPrevious = {
    __typename?: 'ArticleConnectionPrevious';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleConnectionPublished_At = {
    __typename?: 'ArticleConnectionPublished_at';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type ArticleConnectionSlug = {
    __typename?: 'ArticleConnectionSlug';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ArticleConnectionTitle = {
    __typename?: 'ArticleConnectionTitle';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ArticleConnectionUpdated_At = {
    __typename?: 'ArticleConnectionUpdated_at';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type ArticleConnectionViews = {
    __typename?: 'ArticleConnectionViews';
    connection?: Maybe<ArticleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ArticleGroupBy = {
    __typename?: 'ArticleGroupBy';
    author?: Maybe<Array<Maybe<ArticleConnectionAuthor>>>;
    category?: Maybe<Array<Maybe<ArticleConnectionCategory>>>;
    content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
    created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
    description?: Maybe<Array<Maybe<ArticleConnectionDescription>>>;
    excerpt?: Maybe<Array<Maybe<ArticleConnectionExcerpt>>>;
    hits?: Maybe<Array<Maybe<ArticleConnectionHits>>>;
    id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
    image?: Maybe<Array<Maybe<ArticleConnectionImage>>>;
    next?: Maybe<Array<Maybe<ArticleConnectionNext>>>;
    previous?: Maybe<Array<Maybe<ArticleConnectionPrevious>>>;
    published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
    slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
    title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
    updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
    views?: Maybe<Array<Maybe<ArticleConnectionViews>>>;
};
export declare type ArticleInput = {
    author?: Maybe<Scalars['ID']>;
    category?: Maybe<Scalars['ID']>;
    content: Scalars['String'];
    created_by?: Maybe<Scalars['ID']>;
    description: Scalars['String'];
    excerpt?: Maybe<Scalars['String']>;
    hits?: Maybe<Scalars['Long']>;
    image?: Maybe<Scalars['ID']>;
    next?: Maybe<Scalars['ID']>;
    previous?: Maybe<Scalars['ID']>;
    published_at?: Maybe<Scalars['DateTime']>;
    slug: Scalars['String'];
    title: Scalars['String'];
    updated_by?: Maybe<Scalars['ID']>;
    views?: Maybe<Scalars['Long']>;
};
export declare type AuthorTimeline = {
    __typename?: 'AuthorTimeline';
    created_at: Scalars['DateTime'];
    id: Scalars['ID'];
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    timelineEvents?: Maybe<Array<Maybe<Timeline>>>;
    updated_at: Scalars['DateTime'];
    writer?: Maybe<Writer>;
};
export declare type AuthorTimelineTimelineEventsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type AuthorTimelineAggregator = {
    __typename?: 'AuthorTimelineAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type AuthorTimelineConnection = {
    __typename?: 'AuthorTimelineConnection';
    aggregate?: Maybe<AuthorTimelineAggregator>;
    groupBy?: Maybe<AuthorTimelineGroupBy>;
    values?: Maybe<Array<Maybe<AuthorTimeline>>>;
};
export declare type AuthorTimelineConnectionCreated_At = {
    __typename?: 'AuthorTimelineConnectionCreated_at';
    connection?: Maybe<AuthorTimelineConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type AuthorTimelineConnectionId = {
    __typename?: 'AuthorTimelineConnectionId';
    connection?: Maybe<AuthorTimelineConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type AuthorTimelineConnectionPublished_At = {
    __typename?: 'AuthorTimelineConnectionPublished_at';
    connection?: Maybe<AuthorTimelineConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type AuthorTimelineConnectionShortName = {
    __typename?: 'AuthorTimelineConnectionShortName';
    connection?: Maybe<AuthorTimelineConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type AuthorTimelineConnectionUpdated_At = {
    __typename?: 'AuthorTimelineConnectionUpdated_at';
    connection?: Maybe<AuthorTimelineConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type AuthorTimelineConnectionWriter = {
    __typename?: 'AuthorTimelineConnectionWriter';
    connection?: Maybe<AuthorTimelineConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type AuthorTimelineGroupBy = {
    __typename?: 'AuthorTimelineGroupBy';
    created_at?: Maybe<Array<Maybe<AuthorTimelineConnectionCreated_At>>>;
    id?: Maybe<Array<Maybe<AuthorTimelineConnectionId>>>;
    published_at?: Maybe<Array<Maybe<AuthorTimelineConnectionPublished_At>>>;
    shortName?: Maybe<Array<Maybe<AuthorTimelineConnectionShortName>>>;
    updated_at?: Maybe<Array<Maybe<AuthorTimelineConnectionUpdated_At>>>;
    writer?: Maybe<Array<Maybe<AuthorTimelineConnectionWriter>>>;
};
export declare type AuthorTimelineInput = {
    created_by?: Maybe<Scalars['ID']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    timelineEvents?: Maybe<Array<Maybe<Scalars['ID']>>>;
    updated_by?: Maybe<Scalars['ID']>;
    writer?: Maybe<Scalars['ID']>;
};
export declare type Category = {
    __typename?: 'Category';
    articles?: Maybe<Array<Maybe<Article>>>;
    created_at: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    slug: Scalars['String'];
    updated_at: Scalars['DateTime'];
};
export declare type CategoryArticlesArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type CategoryAggregator = {
    __typename?: 'CategoryAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type CategoryConnection = {
    __typename?: 'CategoryConnection';
    aggregate?: Maybe<CategoryAggregator>;
    groupBy?: Maybe<CategoryGroupBy>;
    values?: Maybe<Array<Maybe<Category>>>;
};
export declare type CategoryConnectionCreated_At = {
    __typename?: 'CategoryConnectionCreated_at';
    connection?: Maybe<CategoryConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type CategoryConnectionDescription = {
    __typename?: 'CategoryConnectionDescription';
    connection?: Maybe<CategoryConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type CategoryConnectionId = {
    __typename?: 'CategoryConnectionId';
    connection?: Maybe<CategoryConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type CategoryConnectionName = {
    __typename?: 'CategoryConnectionName';
    connection?: Maybe<CategoryConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type CategoryConnectionSlug = {
    __typename?: 'CategoryConnectionSlug';
    connection?: Maybe<CategoryConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type CategoryConnectionUpdated_At = {
    __typename?: 'CategoryConnectionUpdated_at';
    connection?: Maybe<CategoryConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type CategoryGroupBy = {
    __typename?: 'CategoryGroupBy';
    created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
    description?: Maybe<Array<Maybe<CategoryConnectionDescription>>>;
    id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
    name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
    slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
    updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
};
export declare type CategoryInput = {
    articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    slug: Scalars['String'];
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type ComponentSectionsHero = {
    __typename?: 'ComponentSectionsHero';
    id: Scalars['ID'];
    title: Scalars['String'];
};
export declare type ComponentSectionsHeroInput = {
    title: Scalars['String'];
};
export declare type ComponentSharedSeo = {
    __typename?: 'ComponentSharedSeo';
    id: Scalars['ID'];
    metaDescription: Scalars['String'];
    metaTitle: Scalars['String'];
    shareImage?: Maybe<UploadFile>;
};
export declare type ComponentSharedSeoInput = {
    metaDescription: Scalars['String'];
    metaTitle: Scalars['String'];
    shareImage?: Maybe<Scalars['ID']>;
};
export declare type DomainSkillInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type DomainSkills = {
    __typename?: 'DomainSkills';
    author?: Maybe<Writer>;
    created_at: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    order?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type DomainSkillsAggregator = {
    __typename?: 'DomainSkillsAggregator';
    avg?: Maybe<DomainSkillsAggregatorAvg>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<DomainSkillsAggregatorMax>;
    min?: Maybe<DomainSkillsAggregatorMin>;
    sum?: Maybe<DomainSkillsAggregatorSum>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type DomainSkillsAggregatorAvg = {
    __typename?: 'DomainSkillsAggregatorAvg';
    order?: Maybe<Scalars['Float']>;
};
export declare type DomainSkillsAggregatorMax = {
    __typename?: 'DomainSkillsAggregatorMax';
    order?: Maybe<Scalars['Float']>;
};
export declare type DomainSkillsAggregatorMin = {
    __typename?: 'DomainSkillsAggregatorMin';
    order?: Maybe<Scalars['Float']>;
};
export declare type DomainSkillsAggregatorSum = {
    __typename?: 'DomainSkillsAggregatorSum';
    order?: Maybe<Scalars['Float']>;
};
export declare type DomainSkillsConnection = {
    __typename?: 'DomainSkillsConnection';
    aggregate?: Maybe<DomainSkillsAggregator>;
    groupBy?: Maybe<DomainSkillsGroupBy>;
    values?: Maybe<Array<Maybe<DomainSkills>>>;
};
export declare type DomainSkillsConnectionAuthor = {
    __typename?: 'DomainSkillsConnectionAuthor';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type DomainSkillsConnectionCreated_At = {
    __typename?: 'DomainSkillsConnectionCreated_at';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type DomainSkillsConnectionDescription = {
    __typename?: 'DomainSkillsConnectionDescription';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type DomainSkillsConnectionId = {
    __typename?: 'DomainSkillsConnectionId';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type DomainSkillsConnectionOrder = {
    __typename?: 'DomainSkillsConnectionOrder';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['Int']>;
};
export declare type DomainSkillsConnectionPublished_At = {
    __typename?: 'DomainSkillsConnectionPublished_at';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type DomainSkillsConnectionShortName = {
    __typename?: 'DomainSkillsConnectionShortName';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type DomainSkillsConnectionTitle = {
    __typename?: 'DomainSkillsConnectionTitle';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type DomainSkillsConnectionUpdated_At = {
    __typename?: 'DomainSkillsConnectionUpdated_at';
    connection?: Maybe<DomainSkillsConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type DomainSkillsGroupBy = {
    __typename?: 'DomainSkillsGroupBy';
    author?: Maybe<Array<Maybe<DomainSkillsConnectionAuthor>>>;
    created_at?: Maybe<Array<Maybe<DomainSkillsConnectionCreated_At>>>;
    description?: Maybe<Array<Maybe<DomainSkillsConnectionDescription>>>;
    id?: Maybe<Array<Maybe<DomainSkillsConnectionId>>>;
    order?: Maybe<Array<Maybe<DomainSkillsConnectionOrder>>>;
    published_at?: Maybe<Array<Maybe<DomainSkillsConnectionPublished_At>>>;
    shortName?: Maybe<Array<Maybe<DomainSkillsConnectionShortName>>>;
    title?: Maybe<Array<Maybe<DomainSkillsConnectionTitle>>>;
    updated_at?: Maybe<Array<Maybe<DomainSkillsConnectionUpdated_At>>>;
};
export declare enum Enum_Project_Category {
    Client = "Client",
    Personal = "Personal"
}
export declare type FileInfoInput = {
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type FileInput = {
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    ext?: Maybe<Scalars['String']>;
    formats?: Maybe<Scalars['JSON']>;
    hash: Scalars['String'];
    height?: Maybe<Scalars['Int']>;
    mime: Scalars['String'];
    name: Scalars['String'];
    previewUrl?: Maybe<Scalars['String']>;
    provider: Scalars['String'];
    provider_metadata?: Maybe<Scalars['JSON']>;
    related?: Maybe<Array<Maybe<Scalars['ID']>>>;
    size: Scalars['Float'];
    updated_by?: Maybe<Scalars['ID']>;
    url: Scalars['String'];
    width?: Maybe<Scalars['Int']>;
};
export declare type Global = {
    __typename?: 'Global';
    created_at: Scalars['DateTime'];
    defaultSeo?: Maybe<ComponentSharedSeo>;
    favicon?: Maybe<UploadFile>;
    id: Scalars['ID'];
    siteName: Scalars['String'];
    updated_at: Scalars['DateTime'];
};
export declare type GlobalInput = {
    created_by?: Maybe<Scalars['ID']>;
    defaultSeo: ComponentSharedSeoInput;
    favicon?: Maybe<Scalars['ID']>;
    siteName: Scalars['String'];
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type Homepage = {
    __typename?: 'Homepage';
    created_at: Scalars['DateTime'];
    hero?: Maybe<ComponentSectionsHero>;
    id: Scalars['ID'];
    seo?: Maybe<ComponentSharedSeo>;
    updated_at: Scalars['DateTime'];
};
export declare type HomepageInput = {
    created_by?: Maybe<Scalars['ID']>;
    hero: ComponentSectionsHeroInput;
    seo?: Maybe<ComponentSharedSeoInput>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type I18NLocale = {
    __typename?: 'I18NLocale';
    code?: Maybe<Scalars['String']>;
    created_at: Scalars['DateTime'];
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type InputId = {
    id: Scalars['ID'];
};
export declare type LocaleInput = {
    code?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type Morph = About | AboutAggregator | AboutConnection | AboutConnectionAuthor | AboutConnectionCreated_At | AboutConnectionDescription | AboutConnectionId | AboutConnectionPublished_At | AboutConnectionTimeline | AboutConnectionTitle | AboutConnectionUpdated_At | AboutGroupBy | AboutPage | Article | ArticleAggregator | ArticleConnection | ArticleConnectionAuthor | ArticleConnectionCategory | ArticleConnectionContent | ArticleConnectionCreated_At | ArticleConnectionDescription | ArticleConnectionExcerpt | ArticleConnectionHits | ArticleConnectionId | ArticleConnectionImage | ArticleConnectionNext | ArticleConnectionPrevious | ArticleConnectionPublished_At | ArticleConnectionSlug | ArticleConnectionTitle | ArticleConnectionUpdated_At | ArticleConnectionViews | ArticleGroupBy | AuthorTimeline | AuthorTimelineAggregator | AuthorTimelineConnection | AuthorTimelineConnectionCreated_At | AuthorTimelineConnectionId | AuthorTimelineConnectionPublished_At | AuthorTimelineConnectionShortName | AuthorTimelineConnectionUpdated_At | AuthorTimelineConnectionWriter | AuthorTimelineGroupBy | Category | CategoryAggregator | CategoryConnection | CategoryConnectionCreated_At | CategoryConnectionDescription | CategoryConnectionId | CategoryConnectionName | CategoryConnectionSlug | CategoryConnectionUpdated_At | CategoryGroupBy | ComponentSectionsHero | ComponentSharedSeo | DomainSkills | DomainSkillsAggregator | DomainSkillsAggregatorAvg | DomainSkillsAggregatorMax | DomainSkillsAggregatorMin | DomainSkillsAggregatorSum | DomainSkillsConnection | DomainSkillsConnectionAuthor | DomainSkillsConnectionCreated_At | DomainSkillsConnectionDescription | DomainSkillsConnectionId | DomainSkillsConnectionOrder | DomainSkillsConnectionPublished_At | DomainSkillsConnectionShortName | DomainSkillsConnectionTitle | DomainSkillsConnectionUpdated_At | DomainSkillsGroupBy | Global | Homepage | I18NLocale | Project | ProjectAggregator | ProjectConnection | ProjectConnectionCategory | ProjectConnectionClientName | ProjectConnectionContent | ProjectConnectionCreated_At | ProjectConnectionDeployedLink | ProjectConnectionDescription | ProjectConnectionEndDate | ProjectConnectionGithubLink | ProjectConnectionId | ProjectConnectionIsTop | ProjectConnectionPublished_At | ProjectConnectionSlug | ProjectConnectionStartDate | ProjectConnectionTitle | ProjectConnectionUpdated_At | ProjectGroupBy | Skill | SkillAggregator | SkillConnection | SkillConnectionCreated_At | SkillConnectionId | SkillConnectionName | SkillConnectionPublished_At | SkillConnectionUpdated_At | SkillConnectionUrl | SkillGroupBy | TechinalSkills | TechinalSkillsAggregator | TechinalSkillsAggregatorAvg | TechinalSkillsAggregatorMax | TechinalSkillsAggregatorMin | TechinalSkillsAggregatorSum | TechinalSkillsConnection | TechinalSkillsConnectionCreated_At | TechinalSkillsConnectionDescription | TechinalSkillsConnectionId | TechinalSkillsConnectionOrder | TechinalSkillsConnectionPublished_At | TechinalSkillsConnectionShortName | TechinalSkillsConnectionTitle | TechinalSkillsConnectionUpdated_At | TechinalSkillsGroupBy | Timeline | TimelineAggregator | TimelineCategory | TimelineCategoryAggregator | TimelineCategoryConnection | TimelineCategoryConnectionColor | TimelineCategoryConnectionCreated_At | TimelineCategoryConnectionId | TimelineCategoryConnectionPublished_At | TimelineCategoryConnectionTag | TimelineCategoryConnectionUpdated_At | TimelineCategoryGroupBy | TimelineConnection | TimelineConnectionAuthor | TimelineConnectionCreated_At | TimelineConnectionDate | TimelineConnectionEvent | TimelineConnectionId | TimelineConnectionPublished_At | TimelineConnectionTimelineCategory | TimelineConnectionUpdated_At | TimelineGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Writer | WriterAggregator | WriterConnection | WriterConnectionCreated_At | WriterConnectionEmail | WriterConnectionId | WriterConnectionName | WriterConnectionPicture | WriterConnectionSlug | WriterConnectionUpdated_At | WriterGroupBy | CreateAboutPayload | CreateArticlePayload | CreateAuthorTimelinePayload | CreateCategoryPayload | CreateDomainSkillPayload | CreateProjectPayload | CreateRolePayload | CreateSkillPayload | CreateTechinalSkillPayload | CreateTimelineCategoryPayload | CreateTimelinePayload | CreateUserPayload | CreateWriterPayload | DeleteAboutPagePayload | DeleteAboutPayload | DeleteArticlePayload | DeleteAuthorTimelinePayload | DeleteCategoryPayload | DeleteDomainSkillPayload | DeleteFilePayload | DeleteGlobalPayload | DeleteHomepagePayload | DeleteProjectPayload | DeleteRolePayload | DeleteSkillPayload | DeleteTechinalSkillPayload | DeleteTimelineCategoryPayload | DeleteTimelinePayload | DeleteUserPayload | DeleteWriterPayload | UpdateAboutPagePayload | UpdateAboutPayload | UpdateArticlePayload | UpdateAuthorTimelinePayload | UpdateCategoryPayload | UpdateDomainSkillPayload | UpdateGlobalPayload | UpdateHomepagePayload | UpdateProjectPayload | UpdateRolePayload | UpdateSkillPayload | UpdateTechinalSkillPayload | UpdateTimelineCategoryPayload | UpdateTimelinePayload | UpdateUserPayload | UpdateWriterPayload;
export declare type Mutation = {
    __typename?: 'Mutation';
    createAbout?: Maybe<CreateAboutPayload>;
    createArticle?: Maybe<CreateArticlePayload>;
    createAuthorTimeline?: Maybe<CreateAuthorTimelinePayload>;
    createCategory?: Maybe<CreateCategoryPayload>;
    createDomainSkill?: Maybe<CreateDomainSkillPayload>;
    createProject?: Maybe<CreateProjectPayload>;
    /** Create a new role */
    createRole?: Maybe<CreateRolePayload>;
    createSkill?: Maybe<CreateSkillPayload>;
    createTechinalSkill?: Maybe<CreateTechinalSkillPayload>;
    createTimeline?: Maybe<CreateTimelinePayload>;
    createTimelineCategory?: Maybe<CreateTimelineCategoryPayload>;
    /** Create a new user */
    createUser?: Maybe<CreateUserPayload>;
    createWriter?: Maybe<CreateWriterPayload>;
    deleteAbout?: Maybe<DeleteAboutPayload>;
    deleteAboutPage?: Maybe<DeleteAboutPagePayload>;
    deleteArticle?: Maybe<DeleteArticlePayload>;
    deleteAuthorTimeline?: Maybe<DeleteAuthorTimelinePayload>;
    deleteCategory?: Maybe<DeleteCategoryPayload>;
    deleteDomainSkill?: Maybe<DeleteDomainSkillPayload>;
    /** Delete one file */
    deleteFile?: Maybe<DeleteFilePayload>;
    deleteGlobal?: Maybe<DeleteGlobalPayload>;
    deleteHomepage?: Maybe<DeleteHomepagePayload>;
    deleteProject?: Maybe<DeleteProjectPayload>;
    /** Delete an existing role */
    deleteRole?: Maybe<DeleteRolePayload>;
    deleteSkill?: Maybe<DeleteSkillPayload>;
    deleteTechinalSkill?: Maybe<DeleteTechinalSkillPayload>;
    deleteTimeline?: Maybe<DeleteTimelinePayload>;
    deleteTimelineCategory?: Maybe<DeleteTimelineCategoryPayload>;
    /** Delete an existing user */
    deleteUser?: Maybe<DeleteUserPayload>;
    deleteWriter?: Maybe<DeleteWriterPayload>;
    emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
    forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
    login: UsersPermissionsLoginPayload;
    multipleUpload: Array<Maybe<UploadFile>>;
    register: UsersPermissionsLoginPayload;
    resetPassword?: Maybe<UsersPermissionsLoginPayload>;
    updateAbout?: Maybe<UpdateAboutPayload>;
    updateAboutPage?: Maybe<UpdateAboutPagePayload>;
    updateArticle?: Maybe<UpdateArticlePayload>;
    updateAuthorTimeline?: Maybe<UpdateAuthorTimelinePayload>;
    updateCategory?: Maybe<UpdateCategoryPayload>;
    updateDomainSkill?: Maybe<UpdateDomainSkillPayload>;
    updateFileInfo: UploadFile;
    updateGlobal?: Maybe<UpdateGlobalPayload>;
    updateHomepage?: Maybe<UpdateHomepagePayload>;
    updateProject?: Maybe<UpdateProjectPayload>;
    /** Update an existing role */
    updateRole?: Maybe<UpdateRolePayload>;
    updateSkill?: Maybe<UpdateSkillPayload>;
    updateTechinalSkill?: Maybe<UpdateTechinalSkillPayload>;
    updateTimeline?: Maybe<UpdateTimelinePayload>;
    updateTimelineCategory?: Maybe<UpdateTimelineCategoryPayload>;
    /** Update an existing user */
    updateUser?: Maybe<UpdateUserPayload>;
    updateWriter?: Maybe<UpdateWriterPayload>;
    upload: UploadFile;
};
export declare type MutationCreateAboutArgs = {
    input?: Maybe<CreateAboutInput>;
};
export declare type MutationCreateArticleArgs = {
    input?: Maybe<CreateArticleInput>;
};
export declare type MutationCreateAuthorTimelineArgs = {
    input?: Maybe<CreateAuthorTimelineInput>;
};
export declare type MutationCreateCategoryArgs = {
    input?: Maybe<CreateCategoryInput>;
};
export declare type MutationCreateDomainSkillArgs = {
    input?: Maybe<CreateDomainSkillInput>;
};
export declare type MutationCreateProjectArgs = {
    input?: Maybe<CreateProjectInput>;
};
export declare type MutationCreateRoleArgs = {
    input?: Maybe<CreateRoleInput>;
};
export declare type MutationCreateSkillArgs = {
    input?: Maybe<CreateSkillInput>;
};
export declare type MutationCreateTechinalSkillArgs = {
    input?: Maybe<CreateTechinalSkillInput>;
};
export declare type MutationCreateTimelineArgs = {
    input?: Maybe<CreateTimelineInput>;
};
export declare type MutationCreateTimelineCategoryArgs = {
    input?: Maybe<CreateTimelineCategoryInput>;
};
export declare type MutationCreateUserArgs = {
    input?: Maybe<CreateUserInput>;
};
export declare type MutationCreateWriterArgs = {
    input?: Maybe<CreateWriterInput>;
};
export declare type MutationDeleteAboutArgs = {
    input?: Maybe<DeleteAboutInput>;
};
export declare type MutationDeleteArticleArgs = {
    input?: Maybe<DeleteArticleInput>;
};
export declare type MutationDeleteAuthorTimelineArgs = {
    input?: Maybe<DeleteAuthorTimelineInput>;
};
export declare type MutationDeleteCategoryArgs = {
    input?: Maybe<DeleteCategoryInput>;
};
export declare type MutationDeleteDomainSkillArgs = {
    input?: Maybe<DeleteDomainSkillInput>;
};
export declare type MutationDeleteFileArgs = {
    input?: Maybe<DeleteFileInput>;
};
export declare type MutationDeleteProjectArgs = {
    input?: Maybe<DeleteProjectInput>;
};
export declare type MutationDeleteRoleArgs = {
    input?: Maybe<DeleteRoleInput>;
};
export declare type MutationDeleteSkillArgs = {
    input?: Maybe<DeleteSkillInput>;
};
export declare type MutationDeleteTechinalSkillArgs = {
    input?: Maybe<DeleteTechinalSkillInput>;
};
export declare type MutationDeleteTimelineArgs = {
    input?: Maybe<DeleteTimelineInput>;
};
export declare type MutationDeleteTimelineCategoryArgs = {
    input?: Maybe<DeleteTimelineCategoryInput>;
};
export declare type MutationDeleteUserArgs = {
    input?: Maybe<DeleteUserInput>;
};
export declare type MutationDeleteWriterArgs = {
    input?: Maybe<DeleteWriterInput>;
};
export declare type MutationEmailConfirmationArgs = {
    confirmation: Scalars['String'];
};
export declare type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};
export declare type MutationLoginArgs = {
    input: UsersPermissionsLoginInput;
};
export declare type MutationMultipleUploadArgs = {
    field?: Maybe<Scalars['String']>;
    files: Array<Maybe<Scalars['Upload']>>;
    ref?: Maybe<Scalars['String']>;
    refId?: Maybe<Scalars['ID']>;
    source?: Maybe<Scalars['String']>;
};
export declare type MutationRegisterArgs = {
    input: UsersPermissionsRegisterInput;
};
export declare type MutationResetPasswordArgs = {
    code: Scalars['String'];
    password: Scalars['String'];
    passwordConfirmation: Scalars['String'];
};
export declare type MutationUpdateAboutArgs = {
    input?: Maybe<UpdateAboutInput>;
};
export declare type MutationUpdateAboutPageArgs = {
    input?: Maybe<UpdateAboutPageInput>;
};
export declare type MutationUpdateArticleArgs = {
    input?: Maybe<UpdateArticleInput>;
};
export declare type MutationUpdateAuthorTimelineArgs = {
    input?: Maybe<UpdateAuthorTimelineInput>;
};
export declare type MutationUpdateCategoryArgs = {
    input?: Maybe<UpdateCategoryInput>;
};
export declare type MutationUpdateDomainSkillArgs = {
    input?: Maybe<UpdateDomainSkillInput>;
};
export declare type MutationUpdateFileInfoArgs = {
    id: Scalars['ID'];
    info: FileInfoInput;
};
export declare type MutationUpdateGlobalArgs = {
    input?: Maybe<UpdateGlobalInput>;
};
export declare type MutationUpdateHomepageArgs = {
    input?: Maybe<UpdateHomepageInput>;
};
export declare type MutationUpdateProjectArgs = {
    input?: Maybe<UpdateProjectInput>;
};
export declare type MutationUpdateRoleArgs = {
    input?: Maybe<UpdateRoleInput>;
};
export declare type MutationUpdateSkillArgs = {
    input?: Maybe<UpdateSkillInput>;
};
export declare type MutationUpdateTechinalSkillArgs = {
    input?: Maybe<UpdateTechinalSkillInput>;
};
export declare type MutationUpdateTimelineArgs = {
    input?: Maybe<UpdateTimelineInput>;
};
export declare type MutationUpdateTimelineCategoryArgs = {
    input?: Maybe<UpdateTimelineCategoryInput>;
};
export declare type MutationUpdateUserArgs = {
    input?: Maybe<UpdateUserInput>;
};
export declare type MutationUpdateWriterArgs = {
    input?: Maybe<UpdateWriterInput>;
};
export declare type MutationUploadArgs = {
    field?: Maybe<Scalars['String']>;
    file: Scalars['Upload'];
    info?: Maybe<FileInfoInput>;
    ref?: Maybe<Scalars['String']>;
    refId?: Maybe<Scalars['ID']>;
    source?: Maybe<Scalars['String']>;
};
export declare type Project = {
    __typename?: 'Project';
    authors?: Maybe<Array<Maybe<Writer>>>;
    category?: Maybe<Enum_Project_Category>;
    clientName?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['String']>;
    created_at: Scalars['DateTime'];
    deployedLink?: Maybe<Scalars['String']>;
    description: Scalars['String'];
    endDate?: Maybe<Scalars['Date']>;
    githubLink?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isTop?: Maybe<Scalars['Boolean']>;
    published_at?: Maybe<Scalars['DateTime']>;
    slug?: Maybe<Scalars['String']>;
    snapshots?: Maybe<Array<Maybe<UploadFile>>>;
    startDate?: Maybe<Scalars['Date']>;
    title: Scalars['String'];
    updated_at: Scalars['DateTime'];
};
export declare type ProjectAuthorsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type ProjectSnapshotsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type ProjectAggregator = {
    __typename?: 'ProjectAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type ProjectConnection = {
    __typename?: 'ProjectConnection';
    aggregate?: Maybe<ProjectAggregator>;
    groupBy?: Maybe<ProjectGroupBy>;
    values?: Maybe<Array<Maybe<Project>>>;
};
export declare type ProjectConnectionCategory = {
    __typename?: 'ProjectConnectionCategory';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionClientName = {
    __typename?: 'ProjectConnectionClientName';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionContent = {
    __typename?: 'ProjectConnectionContent';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionCreated_At = {
    __typename?: 'ProjectConnectionCreated_at';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type ProjectConnectionDeployedLink = {
    __typename?: 'ProjectConnectionDeployedLink';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionDescription = {
    __typename?: 'ProjectConnectionDescription';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionEndDate = {
    __typename?: 'ProjectConnectionEndDate';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ProjectConnectionGithubLink = {
    __typename?: 'ProjectConnectionGithubLink';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionId = {
    __typename?: 'ProjectConnectionId';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ProjectConnectionIsTop = {
    __typename?: 'ProjectConnectionIsTop';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['Boolean']>;
};
export declare type ProjectConnectionPublished_At = {
    __typename?: 'ProjectConnectionPublished_at';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type ProjectConnectionSlug = {
    __typename?: 'ProjectConnectionSlug';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionStartDate = {
    __typename?: 'ProjectConnectionStartDate';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type ProjectConnectionTitle = {
    __typename?: 'ProjectConnectionTitle';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type ProjectConnectionUpdated_At = {
    __typename?: 'ProjectConnectionUpdated_at';
    connection?: Maybe<ProjectConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type ProjectGroupBy = {
    __typename?: 'ProjectGroupBy';
    category?: Maybe<Array<Maybe<ProjectConnectionCategory>>>;
    clientName?: Maybe<Array<Maybe<ProjectConnectionClientName>>>;
    content?: Maybe<Array<Maybe<ProjectConnectionContent>>>;
    created_at?: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>;
    deployedLink?: Maybe<Array<Maybe<ProjectConnectionDeployedLink>>>;
    description?: Maybe<Array<Maybe<ProjectConnectionDescription>>>;
    endDate?: Maybe<Array<Maybe<ProjectConnectionEndDate>>>;
    githubLink?: Maybe<Array<Maybe<ProjectConnectionGithubLink>>>;
    id?: Maybe<Array<Maybe<ProjectConnectionId>>>;
    isTop?: Maybe<Array<Maybe<ProjectConnectionIsTop>>>;
    published_at?: Maybe<Array<Maybe<ProjectConnectionPublished_At>>>;
    slug?: Maybe<Array<Maybe<ProjectConnectionSlug>>>;
    startDate?: Maybe<Array<Maybe<ProjectConnectionStartDate>>>;
    title?: Maybe<Array<Maybe<ProjectConnectionTitle>>>;
    updated_at?: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>;
};
export declare type ProjectInput = {
    authors?: Maybe<Array<Maybe<Scalars['ID']>>>;
    category?: Maybe<Enum_Project_Category>;
    clientName?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    deployedLink?: Maybe<Scalars['String']>;
    description: Scalars['String'];
    endDate?: Maybe<Scalars['Date']>;
    githubLink?: Maybe<Scalars['String']>;
    isTop?: Maybe<Scalars['Boolean']>;
    published_at?: Maybe<Scalars['DateTime']>;
    slug?: Maybe<Scalars['String']>;
    snapshots?: Maybe<Array<Maybe<Scalars['ID']>>>;
    startDate?: Maybe<Scalars['Date']>;
    title: Scalars['String'];
    updated_by?: Maybe<Scalars['ID']>;
};
export declare enum PublicationState {
    Live = "LIVE",
    Preview = "PREVIEW"
}
export declare type Query = {
    __typename?: 'Query';
    about?: Maybe<About>;
    aboutPage?: Maybe<AboutPage>;
    abouts?: Maybe<Array<Maybe<About>>>;
    aboutsConnection?: Maybe<AboutConnection>;
    article?: Maybe<Article>;
    articles?: Maybe<Array<Maybe<Article>>>;
    articlesConnection?: Maybe<ArticleConnection>;
    articlesCount: Scalars['Int'];
    authorTimeline?: Maybe<AuthorTimeline>;
    authorTimelines?: Maybe<Array<Maybe<AuthorTimeline>>>;
    authorTimelinesConnection?: Maybe<AuthorTimelineConnection>;
    categories?: Maybe<Array<Maybe<Category>>>;
    categoriesConnection?: Maybe<CategoryConnection>;
    category?: Maybe<Category>;
    domainSkill?: Maybe<DomainSkills>;
    domainSkills?: Maybe<Array<Maybe<DomainSkills>>>;
    domainSkillsConnection?: Maybe<DomainSkillsConnection>;
    files?: Maybe<Array<Maybe<UploadFile>>>;
    filesConnection?: Maybe<UploadFileConnection>;
    global?: Maybe<Global>;
    homepage?: Maybe<Homepage>;
    me?: Maybe<UsersPermissionsMe>;
    project?: Maybe<Project>;
    projects?: Maybe<Array<Maybe<Project>>>;
    projectsConnection?: Maybe<ProjectConnection>;
    role?: Maybe<UsersPermissionsRole>;
    /** Retrieve all the existing roles. You can't apply filters on this query. */
    roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
    rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
    skill?: Maybe<Skill>;
    skills?: Maybe<Array<Maybe<Skill>>>;
    skillsConnection?: Maybe<SkillConnection>;
    techinalSkill?: Maybe<TechinalSkills>;
    techinalSkills?: Maybe<Array<Maybe<TechinalSkills>>>;
    techinalSkillsConnection?: Maybe<TechinalSkillsConnection>;
    timeline?: Maybe<Timeline>;
    timelineCategories?: Maybe<Array<Maybe<TimelineCategory>>>;
    timelineCategoriesConnection?: Maybe<TimelineCategoryConnection>;
    timelineCategory?: Maybe<TimelineCategory>;
    timelines?: Maybe<Array<Maybe<Timeline>>>;
    timelinesConnection?: Maybe<TimelineConnection>;
    user?: Maybe<UsersPermissionsUser>;
    users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
    usersConnection?: Maybe<UsersPermissionsUserConnection>;
    writer?: Maybe<Writer>;
    writers?: Maybe<Array<Maybe<Writer>>>;
    writersConnection?: Maybe<WriterConnection>;
};
export declare type QueryAboutArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryAboutPageArgs = {
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryAboutsArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryAboutsConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryArticleArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryArticlesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryArticlesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryArticlesCountArgs = {
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryAuthorTimelineArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryAuthorTimelinesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryAuthorTimelinesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryCategoriesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryCategoriesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryCategoryArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryDomainSkillArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryDomainSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryDomainSkillsConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryFilesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryFilesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryGlobalArgs = {
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryHomepageArgs = {
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryProjectArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryProjectsArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryProjectsConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryRoleArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryRolesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryRolesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QuerySkillArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QuerySkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QuerySkillsConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryTechinalSkillArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryTechinalSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryTechinalSkillsConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryTimelineArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryTimelineCategoriesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryTimelineCategoriesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryTimelineCategoryArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryTimelinesArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryTimelinesConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryUserArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryUsersArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryUsersConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryWriterArgs = {
    id: Scalars['ID'];
    publicationState?: Maybe<PublicationState>;
};
export declare type QueryWritersArgs = {
    limit?: Maybe<Scalars['Int']>;
    publicationState?: Maybe<PublicationState>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type QueryWritersConnectionArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type RoleInput = {
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
    type?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
    users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
export declare type Skill = {
    __typename?: 'Skill';
    created_at: Scalars['DateTime'];
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    published_at?: Maybe<Scalars['DateTime']>;
    updated_at: Scalars['DateTime'];
    url?: Maybe<Scalars['String']>;
};
export declare type SkillAggregator = {
    __typename?: 'SkillAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type SkillConnection = {
    __typename?: 'SkillConnection';
    aggregate?: Maybe<SkillAggregator>;
    groupBy?: Maybe<SkillGroupBy>;
    values?: Maybe<Array<Maybe<Skill>>>;
};
export declare type SkillConnectionCreated_At = {
    __typename?: 'SkillConnectionCreated_at';
    connection?: Maybe<SkillConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type SkillConnectionId = {
    __typename?: 'SkillConnectionId';
    connection?: Maybe<SkillConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type SkillConnectionName = {
    __typename?: 'SkillConnectionName';
    connection?: Maybe<SkillConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type SkillConnectionPublished_At = {
    __typename?: 'SkillConnectionPublished_at';
    connection?: Maybe<SkillConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type SkillConnectionUpdated_At = {
    __typename?: 'SkillConnectionUpdated_at';
    connection?: Maybe<SkillConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type SkillConnectionUrl = {
    __typename?: 'SkillConnectionUrl';
    connection?: Maybe<SkillConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type SkillGroupBy = {
    __typename?: 'SkillGroupBy';
    created_at?: Maybe<Array<Maybe<SkillConnectionCreated_At>>>;
    id?: Maybe<Array<Maybe<SkillConnectionId>>>;
    name?: Maybe<Array<Maybe<SkillConnectionName>>>;
    published_at?: Maybe<Array<Maybe<SkillConnectionPublished_At>>>;
    updated_at?: Maybe<Array<Maybe<SkillConnectionUpdated_At>>>;
    url?: Maybe<Array<Maybe<SkillConnectionUrl>>>;
};
export declare type SkillInput = {
    created_by?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    published_at?: Maybe<Scalars['DateTime']>;
    updated_by?: Maybe<Scalars['ID']>;
    url?: Maybe<Scalars['String']>;
};
export declare type TechinalSkillInput = {
    author?: Maybe<Array<Maybe<Scalars['ID']>>>;
    created_by?: Maybe<Scalars['ID']>;
    currentLearningSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    description?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    skills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type TechinalSkills = {
    __typename?: 'TechinalSkills';
    author?: Maybe<Array<Maybe<Writer>>>;
    created_at: Scalars['DateTime'];
    currentLearningSkills?: Maybe<Array<Maybe<Skill>>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    order?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    skills?: Maybe<Array<Maybe<Skill>>>;
    title?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type TechinalSkillsAuthorArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type TechinalSkillsCurrentLearningSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type TechinalSkillsSkillsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type TechinalSkillsAggregator = {
    __typename?: 'TechinalSkillsAggregator';
    avg?: Maybe<TechinalSkillsAggregatorAvg>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<TechinalSkillsAggregatorMax>;
    min?: Maybe<TechinalSkillsAggregatorMin>;
    sum?: Maybe<TechinalSkillsAggregatorSum>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type TechinalSkillsAggregatorAvg = {
    __typename?: 'TechinalSkillsAggregatorAvg';
    order?: Maybe<Scalars['Float']>;
};
export declare type TechinalSkillsAggregatorMax = {
    __typename?: 'TechinalSkillsAggregatorMax';
    order?: Maybe<Scalars['Float']>;
};
export declare type TechinalSkillsAggregatorMin = {
    __typename?: 'TechinalSkillsAggregatorMin';
    order?: Maybe<Scalars['Float']>;
};
export declare type TechinalSkillsAggregatorSum = {
    __typename?: 'TechinalSkillsAggregatorSum';
    order?: Maybe<Scalars['Float']>;
};
export declare type TechinalSkillsConnection = {
    __typename?: 'TechinalSkillsConnection';
    aggregate?: Maybe<TechinalSkillsAggregator>;
    groupBy?: Maybe<TechinalSkillsGroupBy>;
    values?: Maybe<Array<Maybe<TechinalSkills>>>;
};
export declare type TechinalSkillsConnectionCreated_At = {
    __typename?: 'TechinalSkillsConnectionCreated_at';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TechinalSkillsConnectionDescription = {
    __typename?: 'TechinalSkillsConnectionDescription';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type TechinalSkillsConnectionId = {
    __typename?: 'TechinalSkillsConnectionId';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type TechinalSkillsConnectionOrder = {
    __typename?: 'TechinalSkillsConnectionOrder';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['Int']>;
};
export declare type TechinalSkillsConnectionPublished_At = {
    __typename?: 'TechinalSkillsConnectionPublished_at';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TechinalSkillsConnectionShortName = {
    __typename?: 'TechinalSkillsConnectionShortName';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type TechinalSkillsConnectionTitle = {
    __typename?: 'TechinalSkillsConnectionTitle';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type TechinalSkillsConnectionUpdated_At = {
    __typename?: 'TechinalSkillsConnectionUpdated_at';
    connection?: Maybe<TechinalSkillsConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TechinalSkillsGroupBy = {
    __typename?: 'TechinalSkillsGroupBy';
    created_at?: Maybe<Array<Maybe<TechinalSkillsConnectionCreated_At>>>;
    description?: Maybe<Array<Maybe<TechinalSkillsConnectionDescription>>>;
    id?: Maybe<Array<Maybe<TechinalSkillsConnectionId>>>;
    order?: Maybe<Array<Maybe<TechinalSkillsConnectionOrder>>>;
    published_at?: Maybe<Array<Maybe<TechinalSkillsConnectionPublished_At>>>;
    shortName?: Maybe<Array<Maybe<TechinalSkillsConnectionShortName>>>;
    title?: Maybe<Array<Maybe<TechinalSkillsConnectionTitle>>>;
    updated_at?: Maybe<Array<Maybe<TechinalSkillsConnectionUpdated_At>>>;
};
export declare type Timeline = {
    __typename?: 'Timeline';
    author?: Maybe<Writer>;
    created_at: Scalars['DateTime'];
    date?: Maybe<Scalars['Date']>;
    event?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    published_at?: Maybe<Scalars['DateTime']>;
    timelineCategory?: Maybe<TimelineCategory>;
    updated_at: Scalars['DateTime'];
};
export declare type TimelineAggregator = {
    __typename?: 'TimelineAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type TimelineCategory = {
    __typename?: 'TimelineCategory';
    color?: Maybe<Scalars['String']>;
    created_at: Scalars['DateTime'];
    id: Scalars['ID'];
    published_at?: Maybe<Scalars['DateTime']>;
    tag?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type TimelineCategoryAggregator = {
    __typename?: 'TimelineCategoryAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type TimelineCategoryConnection = {
    __typename?: 'TimelineCategoryConnection';
    aggregate?: Maybe<TimelineCategoryAggregator>;
    groupBy?: Maybe<TimelineCategoryGroupBy>;
    values?: Maybe<Array<Maybe<TimelineCategory>>>;
};
export declare type TimelineCategoryConnectionColor = {
    __typename?: 'TimelineCategoryConnectionColor';
    connection?: Maybe<TimelineCategoryConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type TimelineCategoryConnectionCreated_At = {
    __typename?: 'TimelineCategoryConnectionCreated_at';
    connection?: Maybe<TimelineCategoryConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TimelineCategoryConnectionId = {
    __typename?: 'TimelineCategoryConnectionId';
    connection?: Maybe<TimelineCategoryConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type TimelineCategoryConnectionPublished_At = {
    __typename?: 'TimelineCategoryConnectionPublished_at';
    connection?: Maybe<TimelineCategoryConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TimelineCategoryConnectionTag = {
    __typename?: 'TimelineCategoryConnectionTag';
    connection?: Maybe<TimelineCategoryConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type TimelineCategoryConnectionUpdated_At = {
    __typename?: 'TimelineCategoryConnectionUpdated_at';
    connection?: Maybe<TimelineCategoryConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TimelineCategoryGroupBy = {
    __typename?: 'TimelineCategoryGroupBy';
    color?: Maybe<Array<Maybe<TimelineCategoryConnectionColor>>>;
    created_at?: Maybe<Array<Maybe<TimelineCategoryConnectionCreated_At>>>;
    id?: Maybe<Array<Maybe<TimelineCategoryConnectionId>>>;
    published_at?: Maybe<Array<Maybe<TimelineCategoryConnectionPublished_At>>>;
    tag?: Maybe<Array<Maybe<TimelineCategoryConnectionTag>>>;
    updated_at?: Maybe<Array<Maybe<TimelineCategoryConnectionUpdated_At>>>;
};
export declare type TimelineCategoryInput = {
    color?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    published_at?: Maybe<Scalars['DateTime']>;
    tag?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type TimelineConnection = {
    __typename?: 'TimelineConnection';
    aggregate?: Maybe<TimelineAggregator>;
    groupBy?: Maybe<TimelineGroupBy>;
    values?: Maybe<Array<Maybe<Timeline>>>;
};
export declare type TimelineConnectionAuthor = {
    __typename?: 'TimelineConnectionAuthor';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type TimelineConnectionCreated_At = {
    __typename?: 'TimelineConnectionCreated_at';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TimelineConnectionDate = {
    __typename?: 'TimelineConnectionDate';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type TimelineConnectionEvent = {
    __typename?: 'TimelineConnectionEvent';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type TimelineConnectionId = {
    __typename?: 'TimelineConnectionId';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type TimelineConnectionPublished_At = {
    __typename?: 'TimelineConnectionPublished_at';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TimelineConnectionTimelineCategory = {
    __typename?: 'TimelineConnectionTimelineCategory';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type TimelineConnectionUpdated_At = {
    __typename?: 'TimelineConnectionUpdated_at';
    connection?: Maybe<TimelineConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type TimelineGroupBy = {
    __typename?: 'TimelineGroupBy';
    author?: Maybe<Array<Maybe<TimelineConnectionAuthor>>>;
    created_at?: Maybe<Array<Maybe<TimelineConnectionCreated_At>>>;
    date?: Maybe<Array<Maybe<TimelineConnectionDate>>>;
    event?: Maybe<Array<Maybe<TimelineConnectionEvent>>>;
    id?: Maybe<Array<Maybe<TimelineConnectionId>>>;
    published_at?: Maybe<Array<Maybe<TimelineConnectionPublished_At>>>;
    timelineCategory?: Maybe<Array<Maybe<TimelineConnectionTimelineCategory>>>;
    updated_at?: Maybe<Array<Maybe<TimelineConnectionUpdated_At>>>;
};
export declare type TimelineInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['Date']>;
    event?: Maybe<Scalars['String']>;
    published_at?: Maybe<Scalars['DateTime']>;
    timelineCategory?: Maybe<Scalars['ID']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type UploadFile = {
    __typename?: 'UploadFile';
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    created_at: Scalars['DateTime'];
    ext?: Maybe<Scalars['String']>;
    formats?: Maybe<Scalars['JSON']>;
    hash: Scalars['String'];
    height?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    mime: Scalars['String'];
    name: Scalars['String'];
    previewUrl?: Maybe<Scalars['String']>;
    provider: Scalars['String'];
    provider_metadata?: Maybe<Scalars['JSON']>;
    related?: Maybe<Array<Maybe<Morph>>>;
    size: Scalars['Float'];
    updated_at: Scalars['DateTime'];
    url: Scalars['String'];
    width?: Maybe<Scalars['Int']>;
};
export declare type UploadFileRelatedArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type UploadFileAggregator = {
    __typename?: 'UploadFileAggregator';
    avg?: Maybe<UploadFileAggregatorAvg>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<UploadFileAggregatorMax>;
    min?: Maybe<UploadFileAggregatorMin>;
    sum?: Maybe<UploadFileAggregatorSum>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type UploadFileAggregatorAvg = {
    __typename?: 'UploadFileAggregatorAvg';
    height?: Maybe<Scalars['Float']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
export declare type UploadFileAggregatorMax = {
    __typename?: 'UploadFileAggregatorMax';
    height?: Maybe<Scalars['Float']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
export declare type UploadFileAggregatorMin = {
    __typename?: 'UploadFileAggregatorMin';
    height?: Maybe<Scalars['Float']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
export declare type UploadFileAggregatorSum = {
    __typename?: 'UploadFileAggregatorSum';
    height?: Maybe<Scalars['Float']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
export declare type UploadFileConnection = {
    __typename?: 'UploadFileConnection';
    aggregate?: Maybe<UploadFileAggregator>;
    groupBy?: Maybe<UploadFileGroupBy>;
    values?: Maybe<Array<Maybe<UploadFile>>>;
};
export declare type UploadFileConnectionAlternativeText = {
    __typename?: 'UploadFileConnectionAlternativeText';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionCaption = {
    __typename?: 'UploadFileConnectionCaption';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionCreated_At = {
    __typename?: 'UploadFileConnectionCreated_at';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type UploadFileConnectionExt = {
    __typename?: 'UploadFileConnectionExt';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionFormats = {
    __typename?: 'UploadFileConnectionFormats';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['JSON']>;
};
export declare type UploadFileConnectionHash = {
    __typename?: 'UploadFileConnectionHash';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionHeight = {
    __typename?: 'UploadFileConnectionHeight';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['Int']>;
};
export declare type UploadFileConnectionId = {
    __typename?: 'UploadFileConnectionId';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type UploadFileConnectionMime = {
    __typename?: 'UploadFileConnectionMime';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionName = {
    __typename?: 'UploadFileConnectionName';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionPreviewUrl = {
    __typename?: 'UploadFileConnectionPreviewUrl';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionProvider = {
    __typename?: 'UploadFileConnectionProvider';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionProvider_Metadata = {
    __typename?: 'UploadFileConnectionProvider_metadata';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['JSON']>;
};
export declare type UploadFileConnectionSize = {
    __typename?: 'UploadFileConnectionSize';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['Float']>;
};
export declare type UploadFileConnectionUpdated_At = {
    __typename?: 'UploadFileConnectionUpdated_at';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type UploadFileConnectionUrl = {
    __typename?: 'UploadFileConnectionUrl';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UploadFileConnectionWidth = {
    __typename?: 'UploadFileConnectionWidth';
    connection?: Maybe<UploadFileConnection>;
    key?: Maybe<Scalars['Int']>;
};
export declare type UploadFileGroupBy = {
    __typename?: 'UploadFileGroupBy';
    alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
    caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
    created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
    ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
    formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
    hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
    height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
    id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
    mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
    name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
    previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
    provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
    provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
    size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
    updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
    url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
    width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};
export declare type UserInput = {
    blocked?: Maybe<Scalars['Boolean']>;
    confirmationToken?: Maybe<Scalars['String']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    created_by?: Maybe<Scalars['ID']>;
    email: Scalars['String'];
    password?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    resetPasswordToken?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['ID']>;
    updated_by?: Maybe<Scalars['ID']>;
    username: Scalars['String'];
};
export declare type UserPermissionsPasswordPayload = {
    __typename?: 'UserPermissionsPasswordPayload';
    ok: Scalars['Boolean'];
};
export declare type UsersPermissionsLoginInput = {
    identifier: Scalars['String'];
    password: Scalars['String'];
    provider?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsLoginPayload = {
    __typename?: 'UsersPermissionsLoginPayload';
    jwt?: Maybe<Scalars['String']>;
    user: UsersPermissionsMe;
};
export declare type UsersPermissionsMe = {
    __typename?: 'UsersPermissionsMe';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    email: Scalars['String'];
    id: Scalars['ID'];
    role?: Maybe<UsersPermissionsMeRole>;
    username: Scalars['String'];
};
export declare type UsersPermissionsMeRole = {
    __typename?: 'UsersPermissionsMeRole';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsPermission = {
    __typename?: 'UsersPermissionsPermission';
    action: Scalars['String'];
    controller: Scalars['String'];
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    policy?: Maybe<Scalars['String']>;
    role?: Maybe<UsersPermissionsRole>;
    type: Scalars['String'];
};
export declare type UsersPermissionsRegisterInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    username: Scalars['String'];
};
export declare type UsersPermissionsRole = {
    __typename?: 'UsersPermissionsRole';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
    type?: Maybe<Scalars['String']>;
    users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};
export declare type UsersPermissionsRolePermissionsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type UsersPermissionsRoleUsersArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type UsersPermissionsRoleAggregator = {
    __typename?: 'UsersPermissionsRoleAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type UsersPermissionsRoleConnection = {
    __typename?: 'UsersPermissionsRoleConnection';
    aggregate?: Maybe<UsersPermissionsRoleAggregator>;
    groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
    values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};
export declare type UsersPermissionsRoleConnectionDescription = {
    __typename?: 'UsersPermissionsRoleConnectionDescription';
    connection?: Maybe<UsersPermissionsRoleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsRoleConnectionId = {
    __typename?: 'UsersPermissionsRoleConnectionId';
    connection?: Maybe<UsersPermissionsRoleConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type UsersPermissionsRoleConnectionName = {
    __typename?: 'UsersPermissionsRoleConnectionName';
    connection?: Maybe<UsersPermissionsRoleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsRoleConnectionType = {
    __typename?: 'UsersPermissionsRoleConnectionType';
    connection?: Maybe<UsersPermissionsRoleConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsRoleGroupBy = {
    __typename?: 'UsersPermissionsRoleGroupBy';
    description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
    id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
    name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
    type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};
export declare type UsersPermissionsUser = {
    __typename?: 'UsersPermissionsUser';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    created_at: Scalars['DateTime'];
    email: Scalars['String'];
    id: Scalars['ID'];
    provider?: Maybe<Scalars['String']>;
    role?: Maybe<UsersPermissionsRole>;
    updated_at: Scalars['DateTime'];
    username: Scalars['String'];
};
export declare type UsersPermissionsUserAggregator = {
    __typename?: 'UsersPermissionsUserAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type UsersPermissionsUserConnection = {
    __typename?: 'UsersPermissionsUserConnection';
    aggregate?: Maybe<UsersPermissionsUserAggregator>;
    groupBy?: Maybe<UsersPermissionsUserGroupBy>;
    values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};
export declare type UsersPermissionsUserConnectionBlocked = {
    __typename?: 'UsersPermissionsUserConnectionBlocked';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['Boolean']>;
};
export declare type UsersPermissionsUserConnectionConfirmed = {
    __typename?: 'UsersPermissionsUserConnectionConfirmed';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['Boolean']>;
};
export declare type UsersPermissionsUserConnectionCreated_At = {
    __typename?: 'UsersPermissionsUserConnectionCreated_at';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type UsersPermissionsUserConnectionEmail = {
    __typename?: 'UsersPermissionsUserConnectionEmail';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsUserConnectionId = {
    __typename?: 'UsersPermissionsUserConnectionId';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type UsersPermissionsUserConnectionProvider = {
    __typename?: 'UsersPermissionsUserConnectionProvider';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsUserConnectionRole = {
    __typename?: 'UsersPermissionsUserConnectionRole';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type UsersPermissionsUserConnectionUpdated_At = {
    __typename?: 'UsersPermissionsUserConnectionUpdated_at';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type UsersPermissionsUserConnectionUsername = {
    __typename?: 'UsersPermissionsUserConnectionUsername';
    connection?: Maybe<UsersPermissionsUserConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type UsersPermissionsUserGroupBy = {
    __typename?: 'UsersPermissionsUserGroupBy';
    blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
    confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
    created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
    email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
    id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
    provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
    role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
    updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
    username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};
export declare type Writer = {
    __typename?: 'Writer';
    articles?: Maybe<Array<Maybe<Article>>>;
    created_at: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    picture?: Maybe<UploadFile>;
    slug?: Maybe<Scalars['String']>;
    updated_at: Scalars['DateTime'];
};
export declare type WriterArticlesArgs = {
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Int']>;
    where?: Maybe<Scalars['JSON']>;
};
export declare type WriterAggregator = {
    __typename?: 'WriterAggregator';
    count?: Maybe<Scalars['Int']>;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type WriterConnection = {
    __typename?: 'WriterConnection';
    aggregate?: Maybe<WriterAggregator>;
    groupBy?: Maybe<WriterGroupBy>;
    values?: Maybe<Array<Maybe<Writer>>>;
};
export declare type WriterConnectionCreated_At = {
    __typename?: 'WriterConnectionCreated_at';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type WriterConnectionEmail = {
    __typename?: 'WriterConnectionEmail';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type WriterConnectionId = {
    __typename?: 'WriterConnectionId';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type WriterConnectionName = {
    __typename?: 'WriterConnectionName';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type WriterConnectionPicture = {
    __typename?: 'WriterConnectionPicture';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['ID']>;
};
export declare type WriterConnectionSlug = {
    __typename?: 'WriterConnectionSlug';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['String']>;
};
export declare type WriterConnectionUpdated_At = {
    __typename?: 'WriterConnectionUpdated_at';
    connection?: Maybe<WriterConnection>;
    key?: Maybe<Scalars['DateTime']>;
};
export declare type WriterGroupBy = {
    __typename?: 'WriterGroupBy';
    created_at?: Maybe<Array<Maybe<WriterConnectionCreated_At>>>;
    email?: Maybe<Array<Maybe<WriterConnectionEmail>>>;
    id?: Maybe<Array<Maybe<WriterConnectionId>>>;
    name?: Maybe<Array<Maybe<WriterConnectionName>>>;
    picture?: Maybe<Array<Maybe<WriterConnectionPicture>>>;
    slug?: Maybe<Array<Maybe<WriterConnectionSlug>>>;
    updated_at?: Maybe<Array<Maybe<WriterConnectionUpdated_At>>>;
};
export declare type WriterInput = {
    articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
    created_by?: Maybe<Scalars['ID']>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type CreateAboutInput = {
    data?: Maybe<AboutInput>;
};
export declare type CreateAboutPayload = {
    __typename?: 'createAboutPayload';
    about?: Maybe<About>;
};
export declare type CreateArticleInput = {
    data?: Maybe<ArticleInput>;
};
export declare type CreateArticlePayload = {
    __typename?: 'createArticlePayload';
    article?: Maybe<Article>;
};
export declare type CreateAuthorTimelineInput = {
    data?: Maybe<AuthorTimelineInput>;
};
export declare type CreateAuthorTimelinePayload = {
    __typename?: 'createAuthorTimelinePayload';
    authorTimeline?: Maybe<AuthorTimeline>;
};
export declare type CreateCategoryInput = {
    data?: Maybe<CategoryInput>;
};
export declare type CreateCategoryPayload = {
    __typename?: 'createCategoryPayload';
    category?: Maybe<Category>;
};
export declare type CreateDomainSkillInput = {
    data?: Maybe<DomainSkillInput>;
};
export declare type CreateDomainSkillPayload = {
    __typename?: 'createDomainSkillPayload';
    domainSkill?: Maybe<DomainSkills>;
};
export declare type CreateProjectInput = {
    data?: Maybe<ProjectInput>;
};
export declare type CreateProjectPayload = {
    __typename?: 'createProjectPayload';
    project?: Maybe<Project>;
};
export declare type CreateRoleInput = {
    data?: Maybe<RoleInput>;
};
export declare type CreateRolePayload = {
    __typename?: 'createRolePayload';
    role?: Maybe<UsersPermissionsRole>;
};
export declare type CreateSkillInput = {
    data?: Maybe<SkillInput>;
};
export declare type CreateSkillPayload = {
    __typename?: 'createSkillPayload';
    skill?: Maybe<Skill>;
};
export declare type CreateTechinalSkillInput = {
    data?: Maybe<TechinalSkillInput>;
};
export declare type CreateTechinalSkillPayload = {
    __typename?: 'createTechinalSkillPayload';
    techinalSkill?: Maybe<TechinalSkills>;
};
export declare type CreateTimelineCategoryInput = {
    data?: Maybe<TimelineCategoryInput>;
};
export declare type CreateTimelineCategoryPayload = {
    __typename?: 'createTimelineCategoryPayload';
    timelineCategory?: Maybe<TimelineCategory>;
};
export declare type CreateTimelineInput = {
    data?: Maybe<TimelineInput>;
};
export declare type CreateTimelinePayload = {
    __typename?: 'createTimelinePayload';
    timeline?: Maybe<Timeline>;
};
export declare type CreateUserInput = {
    data?: Maybe<UserInput>;
};
export declare type CreateUserPayload = {
    __typename?: 'createUserPayload';
    user?: Maybe<UsersPermissionsUser>;
};
export declare type CreateWriterInput = {
    data?: Maybe<WriterInput>;
};
export declare type CreateWriterPayload = {
    __typename?: 'createWriterPayload';
    writer?: Maybe<Writer>;
};
export declare type DeleteAboutInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteAboutPagePayload = {
    __typename?: 'deleteAboutPagePayload';
    aboutPage?: Maybe<AboutPage>;
};
export declare type DeleteAboutPayload = {
    __typename?: 'deleteAboutPayload';
    about?: Maybe<About>;
};
export declare type DeleteArticleInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteArticlePayload = {
    __typename?: 'deleteArticlePayload';
    article?: Maybe<Article>;
};
export declare type DeleteAuthorTimelineInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteAuthorTimelinePayload = {
    __typename?: 'deleteAuthorTimelinePayload';
    authorTimeline?: Maybe<AuthorTimeline>;
};
export declare type DeleteCategoryInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteCategoryPayload = {
    __typename?: 'deleteCategoryPayload';
    category?: Maybe<Category>;
};
export declare type DeleteDomainSkillInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteDomainSkillPayload = {
    __typename?: 'deleteDomainSkillPayload';
    domainSkill?: Maybe<DomainSkills>;
};
export declare type DeleteFileInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteFilePayload = {
    __typename?: 'deleteFilePayload';
    file?: Maybe<UploadFile>;
};
export declare type DeleteGlobalPayload = {
    __typename?: 'deleteGlobalPayload';
    global?: Maybe<Global>;
};
export declare type DeleteHomepagePayload = {
    __typename?: 'deleteHomepagePayload';
    homepage?: Maybe<Homepage>;
};
export declare type DeleteProjectInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteProjectPayload = {
    __typename?: 'deleteProjectPayload';
    project?: Maybe<Project>;
};
export declare type DeleteRoleInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteRolePayload = {
    __typename?: 'deleteRolePayload';
    role?: Maybe<UsersPermissionsRole>;
};
export declare type DeleteSkillInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteSkillPayload = {
    __typename?: 'deleteSkillPayload';
    skill?: Maybe<Skill>;
};
export declare type DeleteTechinalSkillInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteTechinalSkillPayload = {
    __typename?: 'deleteTechinalSkillPayload';
    techinalSkill?: Maybe<TechinalSkills>;
};
export declare type DeleteTimelineCategoryInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteTimelineCategoryPayload = {
    __typename?: 'deleteTimelineCategoryPayload';
    timelineCategory?: Maybe<TimelineCategory>;
};
export declare type DeleteTimelineInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteTimelinePayload = {
    __typename?: 'deleteTimelinePayload';
    timeline?: Maybe<Timeline>;
};
export declare type DeleteUserInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteUserPayload = {
    __typename?: 'deleteUserPayload';
    user?: Maybe<UsersPermissionsUser>;
};
export declare type DeleteWriterInput = {
    where?: Maybe<InputId>;
};
export declare type DeleteWriterPayload = {
    __typename?: 'deleteWriterPayload';
    writer?: Maybe<Writer>;
};
export declare type EditAboutInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    domainSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    published_at?: Maybe<Scalars['DateTime']>;
    technicalSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    timeline?: Maybe<Scalars['ID']>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditAboutPageInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    domainSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    published_at?: Maybe<Scalars['DateTime']>;
    techinalSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditArticleInput = {
    author?: Maybe<Scalars['ID']>;
    category?: Maybe<Scalars['ID']>;
    content?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    excerpt?: Maybe<Scalars['String']>;
    hits?: Maybe<Scalars['Long']>;
    image?: Maybe<Scalars['ID']>;
    next?: Maybe<Scalars['ID']>;
    previous?: Maybe<Scalars['ID']>;
    published_at?: Maybe<Scalars['DateTime']>;
    slug?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
    views?: Maybe<Scalars['Long']>;
};
export declare type EditAuthorTimelineInput = {
    created_by?: Maybe<Scalars['ID']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    timelineEvents?: Maybe<Array<Maybe<Scalars['ID']>>>;
    updated_by?: Maybe<Scalars['ID']>;
    writer?: Maybe<Scalars['ID']>;
};
export declare type EditCategoryInput = {
    articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditComponentSectionsHeroInput = {
    id?: Maybe<Scalars['ID']>;
    title?: Maybe<Scalars['String']>;
};
export declare type EditComponentSharedSeoInput = {
    id?: Maybe<Scalars['ID']>;
    metaDescription?: Maybe<Scalars['String']>;
    metaTitle?: Maybe<Scalars['String']>;
    shareImage?: Maybe<Scalars['ID']>;
};
export declare type EditDomainSkillInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditFileInput = {
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    ext?: Maybe<Scalars['String']>;
    formats?: Maybe<Scalars['JSON']>;
    hash?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Int']>;
    mime?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    previewUrl?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    provider_metadata?: Maybe<Scalars['JSON']>;
    related?: Maybe<Array<Maybe<Scalars['ID']>>>;
    size?: Maybe<Scalars['Float']>;
    updated_by?: Maybe<Scalars['ID']>;
    url?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
};
export declare type EditGlobalInput = {
    created_by?: Maybe<Scalars['ID']>;
    defaultSeo?: Maybe<EditComponentSharedSeoInput>;
    favicon?: Maybe<Scalars['ID']>;
    siteName?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditHomepageInput = {
    created_by?: Maybe<Scalars['ID']>;
    hero?: Maybe<EditComponentSectionsHeroInput>;
    seo?: Maybe<EditComponentSharedSeoInput>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditLocaleInput = {
    code?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditProjectInput = {
    authors?: Maybe<Array<Maybe<Scalars['ID']>>>;
    category?: Maybe<Enum_Project_Category>;
    clientName?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    deployedLink?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['Date']>;
    githubLink?: Maybe<Scalars['String']>;
    isTop?: Maybe<Scalars['Boolean']>;
    published_at?: Maybe<Scalars['DateTime']>;
    slug?: Maybe<Scalars['String']>;
    snapshots?: Maybe<Array<Maybe<Scalars['ID']>>>;
    startDate?: Maybe<Scalars['Date']>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditRoleInput = {
    created_by?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
    type?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
    users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
export declare type EditSkillInput = {
    created_by?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    published_at?: Maybe<Scalars['DateTime']>;
    updated_by?: Maybe<Scalars['ID']>;
    url?: Maybe<Scalars['String']>;
};
export declare type EditTechinalSkillInput = {
    author?: Maybe<Array<Maybe<Scalars['ID']>>>;
    created_by?: Maybe<Scalars['ID']>;
    currentLearningSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    description?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['DateTime']>;
    shortName?: Maybe<Scalars['String']>;
    skills?: Maybe<Array<Maybe<Scalars['ID']>>>;
    title?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditTimelineCategoryInput = {
    color?: Maybe<Scalars['String']>;
    created_by?: Maybe<Scalars['ID']>;
    published_at?: Maybe<Scalars['DateTime']>;
    tag?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditTimelineInput = {
    author?: Maybe<Scalars['ID']>;
    created_by?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['Date']>;
    event?: Maybe<Scalars['String']>;
    published_at?: Maybe<Scalars['DateTime']>;
    timelineCategory?: Maybe<Scalars['ID']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type EditUserInput = {
    blocked?: Maybe<Scalars['Boolean']>;
    confirmationToken?: Maybe<Scalars['String']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    created_by?: Maybe<Scalars['ID']>;
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    resetPasswordToken?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['ID']>;
    updated_by?: Maybe<Scalars['ID']>;
    username?: Maybe<Scalars['String']>;
};
export declare type EditWriterInput = {
    articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
    created_by?: Maybe<Scalars['ID']>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
    updated_by?: Maybe<Scalars['ID']>;
};
export declare type UpdateAboutInput = {
    data?: Maybe<EditAboutInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateAboutPageInput = {
    data?: Maybe<EditAboutPageInput>;
};
export declare type UpdateAboutPagePayload = {
    __typename?: 'updateAboutPagePayload';
    aboutPage?: Maybe<AboutPage>;
};
export declare type UpdateAboutPayload = {
    __typename?: 'updateAboutPayload';
    about?: Maybe<About>;
};
export declare type UpdateArticleInput = {
    data?: Maybe<EditArticleInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateArticlePayload = {
    __typename?: 'updateArticlePayload';
    article?: Maybe<Article>;
};
export declare type UpdateAuthorTimelineInput = {
    data?: Maybe<EditAuthorTimelineInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateAuthorTimelinePayload = {
    __typename?: 'updateAuthorTimelinePayload';
    authorTimeline?: Maybe<AuthorTimeline>;
};
export declare type UpdateCategoryInput = {
    data?: Maybe<EditCategoryInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateCategoryPayload = {
    __typename?: 'updateCategoryPayload';
    category?: Maybe<Category>;
};
export declare type UpdateDomainSkillInput = {
    data?: Maybe<EditDomainSkillInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateDomainSkillPayload = {
    __typename?: 'updateDomainSkillPayload';
    domainSkill?: Maybe<DomainSkills>;
};
export declare type UpdateGlobalInput = {
    data?: Maybe<EditGlobalInput>;
};
export declare type UpdateGlobalPayload = {
    __typename?: 'updateGlobalPayload';
    global?: Maybe<Global>;
};
export declare type UpdateHomepageInput = {
    data?: Maybe<EditHomepageInput>;
};
export declare type UpdateHomepagePayload = {
    __typename?: 'updateHomepagePayload';
    homepage?: Maybe<Homepage>;
};
export declare type UpdateProjectInput = {
    data?: Maybe<EditProjectInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateProjectPayload = {
    __typename?: 'updateProjectPayload';
    project?: Maybe<Project>;
};
export declare type UpdateRoleInput = {
    data?: Maybe<EditRoleInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateRolePayload = {
    __typename?: 'updateRolePayload';
    role?: Maybe<UsersPermissionsRole>;
};
export declare type UpdateSkillInput = {
    data?: Maybe<EditSkillInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateSkillPayload = {
    __typename?: 'updateSkillPayload';
    skill?: Maybe<Skill>;
};
export declare type UpdateTechinalSkillInput = {
    data?: Maybe<EditTechinalSkillInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateTechinalSkillPayload = {
    __typename?: 'updateTechinalSkillPayload';
    techinalSkill?: Maybe<TechinalSkills>;
};
export declare type UpdateTimelineCategoryInput = {
    data?: Maybe<EditTimelineCategoryInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateTimelineCategoryPayload = {
    __typename?: 'updateTimelineCategoryPayload';
    timelineCategory?: Maybe<TimelineCategory>;
};
export declare type UpdateTimelineInput = {
    data?: Maybe<EditTimelineInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateTimelinePayload = {
    __typename?: 'updateTimelinePayload';
    timeline?: Maybe<Timeline>;
};
export declare type UpdateUserInput = {
    data?: Maybe<EditUserInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateUserPayload = {
    __typename?: 'updateUserPayload';
    user?: Maybe<UsersPermissionsUser>;
};
export declare type UpdateWriterInput = {
    data?: Maybe<EditWriterInput>;
    where?: Maybe<InputId>;
};
export declare type UpdateWriterPayload = {
    __typename?: 'updateWriterPayload';
    writer?: Maybe<Writer>;
};
export declare type ArticleMetaPartsFragment = {
    __typename?: 'Article';
    id: string;
    slug: string;
    title: string;
    description: string;
    excerpt: string;
    created_at: any;
    updated_at: any;
    views?: any | null | undefined;
    hits?: any | null | undefined;
};
export declare type ArticlePartsFragment = {
    __typename?: 'Article';
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    excerpt: string;
    created_at: any;
    updated_at: any;
    views?: any | null | undefined;
    hits?: any | null | undefined;
};
export declare type ArticlePreviousOrNextPartsFragment = {
    __typename?: 'Article';
    id: string;
    title: string;
    slug: string;
};
export declare type AuthorPartsFragment = {
    __typename?: 'Writer';
    name?: string | null | undefined;
};
export declare type BlogCategoriesPartsFragment = {
    __typename?: 'Category';
    name: string;
    description?: string | null | undefined;
};
export declare type CategoryPartsFragment = {
    __typename?: 'Category';
    name: string;
    slug: string;
};
export declare type ImagePartsFragment = {
    __typename?: 'Article';
    image?: {
        __typename?: 'UploadFile';
        url: string;
        alternativeText?: string | null | undefined;
        caption?: string | null | undefined;
        width?: number | null | undefined;
        height?: number | null | undefined;
    } | null | undefined;
};
export declare type ProjectMetaPartsFragment = {
    __typename?: 'Project';
    id: string;
    slug?: string | null | undefined;
    title: string;
    description: string;
    isTop?: boolean | null | undefined;
    deployedLink?: string | null | undefined;
};
export declare type ProjectPartsFragment = {
    __typename?: 'Project';
    id: string;
    slug?: string | null | undefined;
    title: string;
    description: string;
    content?: string | null | undefined;
    deployedLink?: string | null | undefined;
    githubLink?: string | null | undefined;
    isTop?: boolean | null | undefined;
    startDate?: any | null | undefined;
    endDate?: any | null | undefined;
    clientName?: string | null | undefined;
    category?: Enum_Project_Category | null | undefined;
};
export declare type ProjectSnapshotPartsFragment = {
    __typename?: 'UploadFile';
    url: string;
    alternativeText?: string | null | undefined;
    caption?: string | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
};
export declare type AboutQueryVariables = Exact<{
    authorSlug: Scalars['String'];
}>;
export declare type AboutQuery = {
    __typename?: 'Query';
    abouts?: Array<{
        __typename?: 'About';
        title?: string | null | undefined;
        description?: string | null | undefined;
        technicalSkills?: Array<{
            __typename?: 'TechinalSkills';
            title?: string | null | undefined;
            description?: string | null | undefined;
            skills?: Array<{
                __typename?: 'Skill';
                name?: string | null | undefined;
                url?: string | null | undefined;
            } | null | undefined> | null | undefined;
            currentLearningSkills?: Array<{
                __typename?: 'Skill';
                name?: string | null | undefined;
                url?: string | null | undefined;
            } | null | undefined> | null | undefined;
        } | null | undefined> | null | undefined;
        domainSkills?: Array<{
            __typename?: 'DomainSkills';
            title?: string | null | undefined;
            description?: string | null | undefined;
        } | null | undefined> | null | undefined;
        timeline?: {
            __typename?: 'AuthorTimeline';
            timelineEvents?: Array<{
                __typename?: 'Timeline';
                event?: string | null | undefined;
                date?: any | null | undefined;
                timelineCategory?: {
                    __typename?: 'TimelineCategory';
                    tag?: string | null | undefined;
                    color?: string | null | undefined;
                } | null | undefined;
            } | null | undefined> | null | undefined;
        } | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type BlogCategoriesPostsQueryVariables = Exact<{
    categorySlug: Scalars['String'];
    authorSlug: Scalars['String'];
}>;
export declare type BlogCategoriesPostsQuery = {
    __typename?: 'Query';
    categories?: Array<{
        __typename?: 'Category';
        name: string;
        description?: string | null | undefined;
        articles?: Array<{
            __typename?: 'Article';
            id: string;
            slug: string;
            title: string;
            description: string;
            excerpt: string;
            created_at: any;
            updated_at: any;
            views?: any | null | undefined;
            hits?: any | null | undefined;
            author?: {
                __typename?: 'Writer';
                name?: string | null | undefined;
            } | null | undefined;
            category?: {
                __typename?: 'Category';
                name: string;
                slug: string;
            } | null | undefined;
            image?: {
                __typename?: 'UploadFile';
                url: string;
                alternativeText?: string | null | undefined;
                caption?: string | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
            } | null | undefined;
        } | null | undefined> | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type BlogCustomSortedPostsQueryVariables = Exact<{
    sortString: Scalars['String'];
    limit: Scalars['Int'];
    authorSlug: Scalars['String'];
}>;
export declare type BlogCustomSortedPostsQuery = {
    __typename?: 'Query';
    articles?: Array<{
        __typename?: 'Article';
        id: string;
        slug: string;
        title: string;
        description: string;
        content: string;
        excerpt: string;
        created_at: any;
        updated_at: any;
        views?: any | null | undefined;
        hits?: any | null | undefined;
        author?: {
            __typename?: 'Writer';
            name?: string | null | undefined;
        } | null | undefined;
        category?: {
            __typename?: 'Category';
            name: string;
            slug: string;
        } | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type BlogPaginatedCategoriesPostsQueryVariables = Exact<{
    offset: Scalars['Int'];
    limit: Scalars['Int'];
    categorySlug: Scalars['String'];
    authorSlug: Scalars['String'];
}>;
export declare type BlogPaginatedCategoriesPostsQuery = {
    __typename?: 'Query';
    categories?: Array<{
        __typename?: 'Category';
        name: string;
        description?: string | null | undefined;
        articles?: Array<{
            __typename?: 'Article';
            id: string;
            slug: string;
            title: string;
            description: string;
            excerpt: string;
            created_at: any;
            updated_at: any;
            views?: any | null | undefined;
            hits?: any | null | undefined;
            author?: {
                __typename?: 'Writer';
                name?: string | null | undefined;
            } | null | undefined;
            category?: {
                __typename?: 'Category';
                name: string;
                slug: string;
            } | null | undefined;
            image?: {
                __typename?: 'UploadFile';
                url: string;
                alternativeText?: string | null | undefined;
                caption?: string | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
            } | null | undefined;
        } | null | undefined> | null | undefined;
    } | null | undefined> | null | undefined;
    articlesConnection?: {
        __typename?: 'ArticleConnection';
        aggregate?: {
            __typename?: 'ArticleAggregator';
            count?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
};
export declare type BlogPaginatedPostsQueryVariables = Exact<{
    offset: Scalars['Int'];
    limit: Scalars['Int'];
    authorSlug: Scalars['String'];
}>;
export declare type BlogPaginatedPostsQuery = {
    __typename?: 'Query';
    articles?: Array<{
        __typename?: 'Article';
        id: string;
        slug: string;
        title: string;
        description: string;
        excerpt: string;
        created_at: any;
        updated_at: any;
        views?: any | null | undefined;
        hits?: any | null | undefined;
        author?: {
            __typename?: 'Writer';
            name?: string | null | undefined;
        } | null | undefined;
        category?: {
            __typename?: 'Category';
            name: string;
            slug: string;
        } | null | undefined;
        image?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined;
    } | null | undefined> | null | undefined;
    articlesConnection?: {
        __typename?: 'ArticleConnection';
        aggregate?: {
            __typename?: 'ArticleAggregator';
            count?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
};
export declare type BlogPaginatedSearchQueryVariables = Exact<{
    limit: Scalars['Int'];
    offset: Scalars['Int'];
    query: Scalars['String'];
    authorSlug: Scalars['String'];
}>;
export declare type BlogPaginatedSearchQuery = {
    __typename?: 'Query';
    articles?: Array<{
        __typename?: 'Article';
        id: string;
        slug: string;
        title: string;
        description: string;
        excerpt: string;
        created_at: any;
        updated_at: any;
        views?: any | null | undefined;
        hits?: any | null | undefined;
        author?: {
            __typename?: 'Writer';
            name?: string | null | undefined;
        } | null | undefined;
        category?: {
            __typename?: 'Category';
            name: string;
            slug: string;
        } | null | undefined;
        image?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined;
    } | null | undefined> | null | undefined;
    articlesConnection?: {
        __typename?: 'ArticleConnection';
        aggregate?: {
            __typename?: 'ArticleAggregator';
            count?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
};
export declare type BlogPostsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type BlogPostsQuery = {
    __typename?: 'Query';
    articles?: Array<{
        __typename?: 'Article';
        id: string;
        slug: string;
        title: string;
        description: string;
        excerpt: string;
        created_at: any;
        updated_at: any;
        views?: any | null | undefined;
        hits?: any | null | undefined;
        author?: {
            __typename?: 'Writer';
            name?: string | null | undefined;
        } | null | undefined;
        category?: {
            __typename?: 'Category';
            name: string;
            slug: string;
        } | null | undefined;
        image?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type BlogSearchPostsQueryVariables = Exact<{
    query: Scalars['String'];
    authorSlug: Scalars['String'];
}>;
export declare type BlogSearchPostsQuery = {
    __typename?: 'Query';
    articles?: Array<{
        __typename?: 'Article';
        id: string;
        slug: string;
        title: string;
        description: string;
        excerpt: string;
        created_at: any;
        updated_at: any;
        views?: any | null | undefined;
        hits?: any | null | undefined;
        author?: {
            __typename?: 'Writer';
            name?: string | null | undefined;
        } | null | undefined;
        category?: {
            __typename?: 'Category';
            name: string;
            slug: string;
        } | null | undefined;
        image?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type SinglePostQueryVariables = Exact<{
    postSlug: Scalars['String'];
    authorSlug: Scalars['String'];
}>;
export declare type SinglePostQuery = {
    __typename?: 'Query';
    articles?: Array<{
        __typename?: 'Article';
        id: string;
        slug: string;
        title: string;
        description: string;
        content: string;
        excerpt: string;
        created_at: any;
        updated_at: any;
        views?: any | null | undefined;
        hits?: any | null | undefined;
        author?: {
            __typename?: 'Writer';
            name?: string | null | undefined;
        } | null | undefined;
        category?: {
            __typename?: 'Category';
            name: string;
            slug: string;
        } | null | undefined;
        previous?: {
            __typename?: 'Article';
            id: string;
            title: string;
            slug: string;
        } | null | undefined;
        next?: {
            __typename?: 'Article';
            id: string;
            title: string;
            slug: string;
        } | null | undefined;
        image?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type CategoriesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type CategoriesQuery = {
    __typename?: 'Query';
    categories?: Array<{
        __typename?: 'Category';
        id: string;
        name: string;
        slug: string;
    } | null | undefined> | null | undefined;
};
export declare type ProjectsCategoryQueryVariables = Exact<{
    category: Scalars['String'];
}>;
export declare type ProjectsCategoryQuery = {
    __typename?: 'Query';
    projects?: Array<{
        __typename?: 'Project';
        id: string;
        slug?: string | null | undefined;
        title: string;
        description: string;
        isTop?: boolean | null | undefined;
        deployedLink?: string | null | undefined;
        snapshots?: Array<{
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined> | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare type SingleProjectQueryVariables = Exact<{
    slug: Scalars['String'];
}>;
export declare type SingleProjectQuery = {
    __typename?: 'Query';
    projects?: Array<{
        __typename?: 'Project';
        id: string;
        slug?: string | null | undefined;
        title: string;
        description: string;
        content?: string | null | undefined;
        deployedLink?: string | null | undefined;
        githubLink?: string | null | undefined;
        isTop?: boolean | null | undefined;
        startDate?: any | null | undefined;
        endDate?: any | null | undefined;
        clientName?: string | null | undefined;
        category?: Enum_Project_Category | null | undefined;
        snapshots?: Array<{
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null | undefined;
            caption?: string | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
        } | null | undefined> | null | undefined;
    } | null | undefined> | null | undefined;
};
export declare const ArticleMetaPartsFragmentDoc: Apollo.DocumentNode;
export declare const ArticlePartsFragmentDoc: Apollo.DocumentNode;
export declare const ArticlePreviousOrNextPartsFragmentDoc: Apollo.DocumentNode;
export declare const AuthorPartsFragmentDoc: Apollo.DocumentNode;
export declare const BlogCategoriesPartsFragmentDoc: Apollo.DocumentNode;
export declare const CategoryPartsFragmentDoc: Apollo.DocumentNode;
export declare const ImagePartsFragmentDoc: Apollo.DocumentNode;
export declare const ProjectMetaPartsFragmentDoc: Apollo.DocumentNode;
export declare const ProjectPartsFragmentDoc: Apollo.DocumentNode;
export declare const ProjectSnapshotPartsFragmentDoc: Apollo.DocumentNode;
export declare const AboutDocument: Apollo.DocumentNode;
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
export declare function useAboutQuery(baseOptions: Apollo.QueryHookOptions<AboutQuery, AboutQueryVariables>): Apollo.QueryResult<AboutQuery, Exact<{
    authorSlug: string;
}>>;
export declare function useAboutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutQuery, AboutQueryVariables>): Apollo.QueryTuple<AboutQuery, Exact<{
    authorSlug: string;
}>>;
export declare type AboutQueryHookResult = ReturnType<typeof useAboutQuery>;
export declare type AboutLazyQueryHookResult = ReturnType<typeof useAboutLazyQuery>;
export declare type AboutQueryResult = Apollo.QueryResult<AboutQuery, AboutQueryVariables>;
export declare const BlogCategoriesPostsDocument: Apollo.DocumentNode;
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
export declare function useBlogCategoriesPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>): Apollo.QueryResult<BlogCategoriesPostsQuery, Exact<{
    categorySlug: string;
    authorSlug: string;
}>>;
export declare function useBlogCategoriesPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>): Apollo.QueryTuple<BlogCategoriesPostsQuery, Exact<{
    categorySlug: string;
    authorSlug: string;
}>>;
export declare type BlogCategoriesPostsQueryHookResult = ReturnType<typeof useBlogCategoriesPostsQuery>;
export declare type BlogCategoriesPostsLazyQueryHookResult = ReturnType<typeof useBlogCategoriesPostsLazyQuery>;
export declare type BlogCategoriesPostsQueryResult = Apollo.QueryResult<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>;
export declare const BlogCustomSortedPostsDocument: Apollo.DocumentNode;
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
export declare function useBlogCustomSortedPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>): Apollo.QueryResult<BlogCustomSortedPostsQuery, Exact<{
    sortString: string;
    limit: number;
    authorSlug: string;
}>>;
export declare function useBlogCustomSortedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>): Apollo.QueryTuple<BlogCustomSortedPostsQuery, Exact<{
    sortString: string;
    limit: number;
    authorSlug: string;
}>>;
export declare type BlogCustomSortedPostsQueryHookResult = ReturnType<typeof useBlogCustomSortedPostsQuery>;
export declare type BlogCustomSortedPostsLazyQueryHookResult = ReturnType<typeof useBlogCustomSortedPostsLazyQuery>;
export declare type BlogCustomSortedPostsQueryResult = Apollo.QueryResult<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>;
export declare const BlogPaginatedCategoriesPostsDocument: Apollo.DocumentNode;
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
export declare function useBlogPaginatedCategoriesPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>): Apollo.QueryResult<BlogPaginatedCategoriesPostsQuery, Exact<{
    offset: number;
    limit: number;
    categorySlug: string;
    authorSlug: string;
}>>;
export declare function useBlogPaginatedCategoriesPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>): Apollo.QueryTuple<BlogPaginatedCategoriesPostsQuery, Exact<{
    offset: number;
    limit: number;
    categorySlug: string;
    authorSlug: string;
}>>;
export declare type BlogPaginatedCategoriesPostsQueryHookResult = ReturnType<typeof useBlogPaginatedCategoriesPostsQuery>;
export declare type BlogPaginatedCategoriesPostsLazyQueryHookResult = ReturnType<typeof useBlogPaginatedCategoriesPostsLazyQuery>;
export declare type BlogPaginatedCategoriesPostsQueryResult = Apollo.QueryResult<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>;
export declare const BlogPaginatedPostsDocument: Apollo.DocumentNode;
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
export declare function useBlogPaginatedPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>): Apollo.QueryResult<BlogPaginatedPostsQuery, Exact<{
    offset: number;
    limit: number;
    authorSlug: string;
}>>;
export declare function useBlogPaginatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>): Apollo.QueryTuple<BlogPaginatedPostsQuery, Exact<{
    offset: number;
    limit: number;
    authorSlug: string;
}>>;
export declare type BlogPaginatedPostsQueryHookResult = ReturnType<typeof useBlogPaginatedPostsQuery>;
export declare type BlogPaginatedPostsLazyQueryHookResult = ReturnType<typeof useBlogPaginatedPostsLazyQuery>;
export declare type BlogPaginatedPostsQueryResult = Apollo.QueryResult<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>;
export declare const BlogPaginatedSearchDocument: Apollo.DocumentNode;
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
export declare function useBlogPaginatedSearchQuery(baseOptions: Apollo.QueryHookOptions<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>): Apollo.QueryResult<BlogPaginatedSearchQuery, Exact<{
    limit: number;
    offset: number;
    query: string;
    authorSlug: string;
}>>;
export declare function useBlogPaginatedSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>): Apollo.QueryTuple<BlogPaginatedSearchQuery, Exact<{
    limit: number;
    offset: number;
    query: string;
    authorSlug: string;
}>>;
export declare type BlogPaginatedSearchQueryHookResult = ReturnType<typeof useBlogPaginatedSearchQuery>;
export declare type BlogPaginatedSearchLazyQueryHookResult = ReturnType<typeof useBlogPaginatedSearchLazyQuery>;
export declare type BlogPaginatedSearchQueryResult = Apollo.QueryResult<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>;
export declare const BlogPostsDocument: Apollo.DocumentNode;
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
export declare function useBlogPostsQuery(baseOptions?: Apollo.QueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>): Apollo.QueryResult<BlogPostsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>): Apollo.QueryTuple<BlogPostsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type BlogPostsQueryHookResult = ReturnType<typeof useBlogPostsQuery>;
export declare type BlogPostsLazyQueryHookResult = ReturnType<typeof useBlogPostsLazyQuery>;
export declare type BlogPostsQueryResult = Apollo.QueryResult<BlogPostsQuery, BlogPostsQueryVariables>;
export declare const BlogSearchPostsDocument: Apollo.DocumentNode;
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
export declare function useBlogSearchPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>): Apollo.QueryResult<BlogSearchPostsQuery, Exact<{
    query: string;
    authorSlug: string;
}>>;
export declare function useBlogSearchPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>): Apollo.QueryTuple<BlogSearchPostsQuery, Exact<{
    query: string;
    authorSlug: string;
}>>;
export declare type BlogSearchPostsQueryHookResult = ReturnType<typeof useBlogSearchPostsQuery>;
export declare type BlogSearchPostsLazyQueryHookResult = ReturnType<typeof useBlogSearchPostsLazyQuery>;
export declare type BlogSearchPostsQueryResult = Apollo.QueryResult<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>;
export declare const SinglePostDocument: Apollo.DocumentNode;
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
export declare function useSinglePostQuery(baseOptions: Apollo.QueryHookOptions<SinglePostQuery, SinglePostQueryVariables>): Apollo.QueryResult<SinglePostQuery, Exact<{
    postSlug: string;
    authorSlug: string;
}>>;
export declare function useSinglePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SinglePostQuery, SinglePostQueryVariables>): Apollo.QueryTuple<SinglePostQuery, Exact<{
    postSlug: string;
    authorSlug: string;
}>>;
export declare type SinglePostQueryHookResult = ReturnType<typeof useSinglePostQuery>;
export declare type SinglePostLazyQueryHookResult = ReturnType<typeof useSinglePostLazyQuery>;
export declare type SinglePostQueryResult = Apollo.QueryResult<SinglePostQuery, SinglePostQueryVariables>;
export declare const CategoriesDocument: Apollo.DocumentNode;
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
export declare function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>): Apollo.QueryResult<CategoriesQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>): Apollo.QueryTuple<CategoriesQuery, Exact<{
    [key: string]: never;
}>>;
export declare type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export declare type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export declare type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export declare const ProjectsCategoryDocument: Apollo.DocumentNode;
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
export declare function useProjectsCategoryQuery(baseOptions: Apollo.QueryHookOptions<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>): Apollo.QueryResult<ProjectsCategoryQuery, Exact<{
    category: string;
}>>;
export declare function useProjectsCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>): Apollo.QueryTuple<ProjectsCategoryQuery, Exact<{
    category: string;
}>>;
export declare type ProjectsCategoryQueryHookResult = ReturnType<typeof useProjectsCategoryQuery>;
export declare type ProjectsCategoryLazyQueryHookResult = ReturnType<typeof useProjectsCategoryLazyQuery>;
export declare type ProjectsCategoryQueryResult = Apollo.QueryResult<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>;
export declare const SingleProjectDocument: Apollo.DocumentNode;
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
export declare function useSingleProjectQuery(baseOptions: Apollo.QueryHookOptions<SingleProjectQuery, SingleProjectQueryVariables>): Apollo.QueryResult<SingleProjectQuery, Exact<{
    slug: string;
}>>;
export declare function useSingleProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProjectQuery, SingleProjectQueryVariables>): Apollo.QueryTuple<SingleProjectQuery, Exact<{
    slug: string;
}>>;
export declare type SingleProjectQueryHookResult = ReturnType<typeof useSingleProjectQuery>;
export declare type SingleProjectLazyQueryHookResult = ReturnType<typeof useSingleProjectLazyQuery>;
export declare type SingleProjectQueryResult = Apollo.QueryResult<SingleProjectQuery, SingleProjectQueryVariables>;
