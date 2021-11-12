import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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

export type About = {
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


export type AboutDomainSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutTechnicalSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AboutAggregator = {
  __typename?: 'AboutAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AboutConnection = {
  __typename?: 'AboutConnection';
  aggregate?: Maybe<AboutAggregator>;
  groupBy?: Maybe<AboutGroupBy>;
  values?: Maybe<Array<Maybe<About>>>;
};

export type AboutConnectionAuthor = {
  __typename?: 'AboutConnectionAuthor';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AboutConnectionCreated_At = {
  __typename?: 'AboutConnectionCreated_at';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AboutConnectionDescription = {
  __typename?: 'AboutConnectionDescription';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AboutConnectionId = {
  __typename?: 'AboutConnectionId';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AboutConnectionPublished_At = {
  __typename?: 'AboutConnectionPublished_at';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AboutConnectionTimeline = {
  __typename?: 'AboutConnectionTimeline';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AboutConnectionTitle = {
  __typename?: 'AboutConnectionTitle';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AboutConnectionUpdated_At = {
  __typename?: 'AboutConnectionUpdated_at';
  connection?: Maybe<AboutConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AboutGroupBy = {
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

export type AboutInput = {
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

export type AboutPage = {
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


export type AboutPageDomainSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutPageTechinalSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AboutPageInput = {
  author?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  domainSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  techinalSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Article = {
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

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionAuthor = {
  __typename?: 'ArticleConnectionAuthor';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionCategory = {
  __typename?: 'ArticleConnectionCategory';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionDescription = {
  __typename?: 'ArticleConnectionDescription';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionExcerpt = {
  __typename?: 'ArticleConnectionExcerpt';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionHits = {
  __typename?: 'ArticleConnectionHits';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionImage = {
  __typename?: 'ArticleConnectionImage';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionNext = {
  __typename?: 'ArticleConnectionNext';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionPrevious = {
  __typename?: 'ArticleConnectionPrevious';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionViews = {
  __typename?: 'ArticleConnectionViews';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleGroupBy = {
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

export type ArticleInput = {
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

export type AuthorTimeline = {
  __typename?: 'AuthorTimeline';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  timelineEvents?: Maybe<Array<Maybe<Timeline>>>;
  updated_at: Scalars['DateTime'];
  writer?: Maybe<Writer>;
};


export type AuthorTimelineTimelineEventsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AuthorTimelineAggregator = {
  __typename?: 'AuthorTimelineAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorTimelineConnection = {
  __typename?: 'AuthorTimelineConnection';
  aggregate?: Maybe<AuthorTimelineAggregator>;
  groupBy?: Maybe<AuthorTimelineGroupBy>;
  values?: Maybe<Array<Maybe<AuthorTimeline>>>;
};

export type AuthorTimelineConnectionCreated_At = {
  __typename?: 'AuthorTimelineConnectionCreated_at';
  connection?: Maybe<AuthorTimelineConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AuthorTimelineConnectionId = {
  __typename?: 'AuthorTimelineConnectionId';
  connection?: Maybe<AuthorTimelineConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AuthorTimelineConnectionPublished_At = {
  __typename?: 'AuthorTimelineConnectionPublished_at';
  connection?: Maybe<AuthorTimelineConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AuthorTimelineConnectionShortName = {
  __typename?: 'AuthorTimelineConnectionShortName';
  connection?: Maybe<AuthorTimelineConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AuthorTimelineConnectionUpdated_At = {
  __typename?: 'AuthorTimelineConnectionUpdated_at';
  connection?: Maybe<AuthorTimelineConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AuthorTimelineConnectionWriter = {
  __typename?: 'AuthorTimelineConnectionWriter';
  connection?: Maybe<AuthorTimelineConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AuthorTimelineGroupBy = {
  __typename?: 'AuthorTimelineGroupBy';
  created_at?: Maybe<Array<Maybe<AuthorTimelineConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<AuthorTimelineConnectionId>>>;
  published_at?: Maybe<Array<Maybe<AuthorTimelineConnectionPublished_At>>>;
  shortName?: Maybe<Array<Maybe<AuthorTimelineConnectionShortName>>>;
  updated_at?: Maybe<Array<Maybe<AuthorTimelineConnectionUpdated_At>>>;
  writer?: Maybe<Array<Maybe<AuthorTimelineConnectionWriter>>>;
};

export type AuthorTimelineInput = {
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  timelineEvents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
  writer?: Maybe<Scalars['ID']>;
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<Array<Maybe<Article>>>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CategoryArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate?: Maybe<CategoryAggregator>;
  groupBy?: Maybe<CategoryGroupBy>;
  values?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnectionDescription = {
  __typename?: 'CategoryConnectionDescription';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<CategoryConnectionDescription>>>;
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
};

export type CategoryInput = {
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSectionsHeroInput = {
  title: Scalars['String'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSeoInput = {
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: Maybe<Scalars['ID']>;
};

export type DomainSkillInput = {
  author?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DomainSkills = {
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

export type DomainSkillsAggregator = {
  __typename?: 'DomainSkillsAggregator';
  avg?: Maybe<DomainSkillsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DomainSkillsAggregatorMax>;
  min?: Maybe<DomainSkillsAggregatorMin>;
  sum?: Maybe<DomainSkillsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DomainSkillsAggregatorAvg = {
  __typename?: 'DomainSkillsAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type DomainSkillsAggregatorMax = {
  __typename?: 'DomainSkillsAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type DomainSkillsAggregatorMin = {
  __typename?: 'DomainSkillsAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type DomainSkillsAggregatorSum = {
  __typename?: 'DomainSkillsAggregatorSum';
  order?: Maybe<Scalars['Float']>;
};

export type DomainSkillsConnection = {
  __typename?: 'DomainSkillsConnection';
  aggregate?: Maybe<DomainSkillsAggregator>;
  groupBy?: Maybe<DomainSkillsGroupBy>;
  values?: Maybe<Array<Maybe<DomainSkills>>>;
};

export type DomainSkillsConnectionAuthor = {
  __typename?: 'DomainSkillsConnectionAuthor';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DomainSkillsConnectionCreated_At = {
  __typename?: 'DomainSkillsConnectionCreated_at';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DomainSkillsConnectionDescription = {
  __typename?: 'DomainSkillsConnectionDescription';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DomainSkillsConnectionId = {
  __typename?: 'DomainSkillsConnectionId';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DomainSkillsConnectionOrder = {
  __typename?: 'DomainSkillsConnectionOrder';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type DomainSkillsConnectionPublished_At = {
  __typename?: 'DomainSkillsConnectionPublished_at';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DomainSkillsConnectionShortName = {
  __typename?: 'DomainSkillsConnectionShortName';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DomainSkillsConnectionTitle = {
  __typename?: 'DomainSkillsConnectionTitle';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DomainSkillsConnectionUpdated_At = {
  __typename?: 'DomainSkillsConnectionUpdated_at';
  connection?: Maybe<DomainSkillsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DomainSkillsGroupBy = {
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

export enum Enum_Project_Category {
  Client = 'Client',
  Personal = 'Personal'
}

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
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

export type Global = {
  __typename?: 'Global';
  created_at: Scalars['DateTime'];
  defaultSeo?: Maybe<ComponentSharedSeo>;
  favicon?: Maybe<UploadFile>;
  id: Scalars['ID'];
  siteName: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type GlobalInput = {
  created_by?: Maybe<Scalars['ID']>;
  defaultSeo: ComponentSharedSeoInput;
  favicon?: Maybe<Scalars['ID']>;
  siteName: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  created_at: Scalars['DateTime'];
  hero?: Maybe<ComponentSectionsHero>;
  id: Scalars['ID'];
  seo?: Maybe<ComponentSharedSeo>;
  updated_at: Scalars['DateTime'];
};

export type HomepageInput = {
  created_by?: Maybe<Scalars['ID']>;
  hero: ComponentSectionsHeroInput;
  seo?: Maybe<ComponentSharedSeoInput>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Morph = About | AboutAggregator | AboutConnection | AboutConnectionAuthor | AboutConnectionCreated_At | AboutConnectionDescription | AboutConnectionId | AboutConnectionPublished_At | AboutConnectionTimeline | AboutConnectionTitle | AboutConnectionUpdated_At | AboutGroupBy | AboutPage | Article | ArticleAggregator | ArticleConnection | ArticleConnectionAuthor | ArticleConnectionCategory | ArticleConnectionContent | ArticleConnectionCreated_At | ArticleConnectionDescription | ArticleConnectionExcerpt | ArticleConnectionHits | ArticleConnectionId | ArticleConnectionImage | ArticleConnectionNext | ArticleConnectionPrevious | ArticleConnectionPublished_At | ArticleConnectionSlug | ArticleConnectionTitle | ArticleConnectionUpdated_At | ArticleConnectionViews | ArticleGroupBy | AuthorTimeline | AuthorTimelineAggregator | AuthorTimelineConnection | AuthorTimelineConnectionCreated_At | AuthorTimelineConnectionId | AuthorTimelineConnectionPublished_At | AuthorTimelineConnectionShortName | AuthorTimelineConnectionUpdated_At | AuthorTimelineConnectionWriter | AuthorTimelineGroupBy | Category | CategoryAggregator | CategoryConnection | CategoryConnectionCreated_At | CategoryConnectionDescription | CategoryConnectionId | CategoryConnectionName | CategoryConnectionSlug | CategoryConnectionUpdated_At | CategoryGroupBy | ComponentSectionsHero | ComponentSharedSeo | DomainSkills | DomainSkillsAggregator | DomainSkillsAggregatorAvg | DomainSkillsAggregatorMax | DomainSkillsAggregatorMin | DomainSkillsAggregatorSum | DomainSkillsConnection | DomainSkillsConnectionAuthor | DomainSkillsConnectionCreated_At | DomainSkillsConnectionDescription | DomainSkillsConnectionId | DomainSkillsConnectionOrder | DomainSkillsConnectionPublished_At | DomainSkillsConnectionShortName | DomainSkillsConnectionTitle | DomainSkillsConnectionUpdated_At | DomainSkillsGroupBy | Global | Homepage | I18NLocale | Project | ProjectAggregator | ProjectConnection | ProjectConnectionCategory | ProjectConnectionClientName | ProjectConnectionContent | ProjectConnectionCreated_At | ProjectConnectionDeployedLink | ProjectConnectionDescription | ProjectConnectionEndDate | ProjectConnectionGithubLink | ProjectConnectionId | ProjectConnectionIsTop | ProjectConnectionPublished_At | ProjectConnectionSlug | ProjectConnectionStartDate | ProjectConnectionTitle | ProjectConnectionUpdated_At | ProjectGroupBy | Skill | SkillAggregator | SkillConnection | SkillConnectionCreated_At | SkillConnectionId | SkillConnectionName | SkillConnectionPublished_At | SkillConnectionUpdated_At | SkillConnectionUrl | SkillGroupBy | TechinalSkills | TechinalSkillsAggregator | TechinalSkillsAggregatorAvg | TechinalSkillsAggregatorMax | TechinalSkillsAggregatorMin | TechinalSkillsAggregatorSum | TechinalSkillsConnection | TechinalSkillsConnectionCreated_At | TechinalSkillsConnectionDescription | TechinalSkillsConnectionId | TechinalSkillsConnectionOrder | TechinalSkillsConnectionPublished_At | TechinalSkillsConnectionShortName | TechinalSkillsConnectionTitle | TechinalSkillsConnectionUpdated_At | TechinalSkillsGroupBy | Timeline | TimelineAggregator | TimelineCategory | TimelineCategoryAggregator | TimelineCategoryConnection | TimelineCategoryConnectionColor | TimelineCategoryConnectionCreated_At | TimelineCategoryConnectionId | TimelineCategoryConnectionPublished_At | TimelineCategoryConnectionTag | TimelineCategoryConnectionUpdated_At | TimelineCategoryGroupBy | TimelineConnection | TimelineConnectionAuthor | TimelineConnectionCreated_At | TimelineConnectionDate | TimelineConnectionEvent | TimelineConnectionId | TimelineConnectionPublished_At | TimelineConnectionTimelineCategory | TimelineConnectionUpdated_At | TimelineGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Writer | WriterAggregator | WriterConnection | WriterConnectionCreated_At | WriterConnectionEmail | WriterConnectionId | WriterConnectionName | WriterConnectionPicture | WriterConnectionSlug | WriterConnectionUpdated_At | WriterGroupBy | CreateAboutPayload | CreateArticlePayload | CreateAuthorTimelinePayload | CreateCategoryPayload | CreateDomainSkillPayload | CreateProjectPayload | CreateRolePayload | CreateSkillPayload | CreateTechinalSkillPayload | CreateTimelineCategoryPayload | CreateTimelinePayload | CreateUserPayload | CreateWriterPayload | DeleteAboutPagePayload | DeleteAboutPayload | DeleteArticlePayload | DeleteAuthorTimelinePayload | DeleteCategoryPayload | DeleteDomainSkillPayload | DeleteFilePayload | DeleteGlobalPayload | DeleteHomepagePayload | DeleteProjectPayload | DeleteRolePayload | DeleteSkillPayload | DeleteTechinalSkillPayload | DeleteTimelineCategoryPayload | DeleteTimelinePayload | DeleteUserPayload | DeleteWriterPayload | UpdateAboutPagePayload | UpdateAboutPayload | UpdateArticlePayload | UpdateAuthorTimelinePayload | UpdateCategoryPayload | UpdateDomainSkillPayload | UpdateGlobalPayload | UpdateHomepagePayload | UpdateProjectPayload | UpdateRolePayload | UpdateSkillPayload | UpdateTechinalSkillPayload | UpdateTimelineCategoryPayload | UpdateTimelinePayload | UpdateUserPayload | UpdateWriterPayload;

export type Mutation = {
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


export type MutationCreateAboutArgs = {
  input?: Maybe<CreateAboutInput>;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationCreateAuthorTimelineArgs = {
  input?: Maybe<CreateAuthorTimelineInput>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationCreateDomainSkillArgs = {
  input?: Maybe<CreateDomainSkillInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateSkillArgs = {
  input?: Maybe<CreateSkillInput>;
};


export type MutationCreateTechinalSkillArgs = {
  input?: Maybe<CreateTechinalSkillInput>;
};


export type MutationCreateTimelineArgs = {
  input?: Maybe<CreateTimelineInput>;
};


export type MutationCreateTimelineCategoryArgs = {
  input?: Maybe<CreateTimelineCategoryInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationCreateWriterArgs = {
  input?: Maybe<CreateWriterInput>;
};


export type MutationDeleteAboutArgs = {
  input?: Maybe<DeleteAboutInput>;
};


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationDeleteAuthorTimelineArgs = {
  input?: Maybe<DeleteAuthorTimelineInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationDeleteDomainSkillArgs = {
  input?: Maybe<DeleteDomainSkillInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationDeleteSkillArgs = {
  input?: Maybe<DeleteSkillInput>;
};


export type MutationDeleteTechinalSkillArgs = {
  input?: Maybe<DeleteTechinalSkillInput>;
};


export type MutationDeleteTimelineArgs = {
  input?: Maybe<DeleteTimelineInput>;
};


export type MutationDeleteTimelineCategoryArgs = {
  input?: Maybe<DeleteTimelineCategoryInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationDeleteWriterArgs = {
  input?: Maybe<DeleteWriterInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  input?: Maybe<UpdateAboutInput>;
};


export type MutationUpdateAboutPageArgs = {
  input?: Maybe<UpdateAboutPageInput>;
};


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationUpdateAuthorTimelineArgs = {
  input?: Maybe<UpdateAuthorTimelineInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationUpdateDomainSkillArgs = {
  input?: Maybe<UpdateDomainSkillInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGlobalArgs = {
  input?: Maybe<UpdateGlobalInput>;
};


export type MutationUpdateHomepageArgs = {
  input?: Maybe<UpdateHomepageInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpdateSkillArgs = {
  input?: Maybe<UpdateSkillInput>;
};


export type MutationUpdateTechinalSkillArgs = {
  input?: Maybe<UpdateTechinalSkillInput>;
};


export type MutationUpdateTimelineArgs = {
  input?: Maybe<UpdateTimelineInput>;
};


export type MutationUpdateTimelineCategoryArgs = {
  input?: Maybe<UpdateTimelineCategoryInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUpdateWriterArgs = {
  input?: Maybe<UpdateWriterInput>;
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type Project = {
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


export type ProjectAuthorsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ProjectSnapshotsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate?: Maybe<ProjectAggregator>;
  groupBy?: Maybe<ProjectGroupBy>;
  values?: Maybe<Array<Maybe<Project>>>;
};

export type ProjectConnectionCategory = {
  __typename?: 'ProjectConnectionCategory';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionClientName = {
  __typename?: 'ProjectConnectionClientName';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionContent = {
  __typename?: 'ProjectConnectionContent';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionDeployedLink = {
  __typename?: 'ProjectConnectionDeployedLink';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionDescription = {
  __typename?: 'ProjectConnectionDescription';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionEndDate = {
  __typename?: 'ProjectConnectionEndDate';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectConnectionGithubLink = {
  __typename?: 'ProjectConnectionGithubLink';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectConnectionIsTop = {
  __typename?: 'ProjectConnectionIsTop';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ProjectConnectionPublished_At = {
  __typename?: 'ProjectConnectionPublished_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionSlug = {
  __typename?: 'ProjectConnectionSlug';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionStartDate = {
  __typename?: 'ProjectConnectionStartDate';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectConnectionTitle = {
  __typename?: 'ProjectConnectionTitle';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectGroupBy = {
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

export type ProjectInput = {
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

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
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


export type QueryAboutArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAboutPageArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryAboutsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryAboutsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticlesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticlesCountArgs = {
  where?: Maybe<Scalars['JSON']>;
};


export type QueryAuthorTimelineArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAuthorTimelinesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryAuthorTimelinesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDomainSkillArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDomainSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDomainSkillsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGlobalArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomepageArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySkillArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySkillsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTechinalSkillArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTechinalSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTechinalSkillsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTimelineArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTimelineCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTimelineCategoriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTimelineCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTimelinesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTimelinesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWriterArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWritersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWritersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Skill = {
  __typename?: 'Skill';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};

export type SkillAggregator = {
  __typename?: 'SkillAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  aggregate?: Maybe<SkillAggregator>;
  groupBy?: Maybe<SkillGroupBy>;
  values?: Maybe<Array<Maybe<Skill>>>;
};

export type SkillConnectionCreated_At = {
  __typename?: 'SkillConnectionCreated_at';
  connection?: Maybe<SkillConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SkillConnectionId = {
  __typename?: 'SkillConnectionId';
  connection?: Maybe<SkillConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SkillConnectionName = {
  __typename?: 'SkillConnectionName';
  connection?: Maybe<SkillConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SkillConnectionPublished_At = {
  __typename?: 'SkillConnectionPublished_at';
  connection?: Maybe<SkillConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SkillConnectionUpdated_At = {
  __typename?: 'SkillConnectionUpdated_at';
  connection?: Maybe<SkillConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SkillConnectionUrl = {
  __typename?: 'SkillConnectionUrl';
  connection?: Maybe<SkillConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SkillGroupBy = {
  __typename?: 'SkillGroupBy';
  created_at?: Maybe<Array<Maybe<SkillConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<SkillConnectionId>>>;
  name?: Maybe<Array<Maybe<SkillConnectionName>>>;
  published_at?: Maybe<Array<Maybe<SkillConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<SkillConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<SkillConnectionUrl>>>;
};

export type SkillInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type TechinalSkillInput = {
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

export type TechinalSkills = {
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


export type TechinalSkillsAuthorArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TechinalSkillsCurrentLearningSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TechinalSkillsSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TechinalSkillsAggregator = {
  __typename?: 'TechinalSkillsAggregator';
  avg?: Maybe<TechinalSkillsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TechinalSkillsAggregatorMax>;
  min?: Maybe<TechinalSkillsAggregatorMin>;
  sum?: Maybe<TechinalSkillsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TechinalSkillsAggregatorAvg = {
  __typename?: 'TechinalSkillsAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type TechinalSkillsAggregatorMax = {
  __typename?: 'TechinalSkillsAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type TechinalSkillsAggregatorMin = {
  __typename?: 'TechinalSkillsAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type TechinalSkillsAggregatorSum = {
  __typename?: 'TechinalSkillsAggregatorSum';
  order?: Maybe<Scalars['Float']>;
};

export type TechinalSkillsConnection = {
  __typename?: 'TechinalSkillsConnection';
  aggregate?: Maybe<TechinalSkillsAggregator>;
  groupBy?: Maybe<TechinalSkillsGroupBy>;
  values?: Maybe<Array<Maybe<TechinalSkills>>>;
};

export type TechinalSkillsConnectionCreated_At = {
  __typename?: 'TechinalSkillsConnectionCreated_at';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TechinalSkillsConnectionDescription = {
  __typename?: 'TechinalSkillsConnectionDescription';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TechinalSkillsConnectionId = {
  __typename?: 'TechinalSkillsConnectionId';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TechinalSkillsConnectionOrder = {
  __typename?: 'TechinalSkillsConnectionOrder';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type TechinalSkillsConnectionPublished_At = {
  __typename?: 'TechinalSkillsConnectionPublished_at';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TechinalSkillsConnectionShortName = {
  __typename?: 'TechinalSkillsConnectionShortName';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TechinalSkillsConnectionTitle = {
  __typename?: 'TechinalSkillsConnectionTitle';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TechinalSkillsConnectionUpdated_At = {
  __typename?: 'TechinalSkillsConnectionUpdated_at';
  connection?: Maybe<TechinalSkillsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TechinalSkillsGroupBy = {
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

export type Timeline = {
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

export type TimelineAggregator = {
  __typename?: 'TimelineAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TimelineCategory = {
  __typename?: 'TimelineCategory';
  color?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  tag?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type TimelineCategoryAggregator = {
  __typename?: 'TimelineCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TimelineCategoryConnection = {
  __typename?: 'TimelineCategoryConnection';
  aggregate?: Maybe<TimelineCategoryAggregator>;
  groupBy?: Maybe<TimelineCategoryGroupBy>;
  values?: Maybe<Array<Maybe<TimelineCategory>>>;
};

export type TimelineCategoryConnectionColor = {
  __typename?: 'TimelineCategoryConnectionColor';
  connection?: Maybe<TimelineCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TimelineCategoryConnectionCreated_At = {
  __typename?: 'TimelineCategoryConnectionCreated_at';
  connection?: Maybe<TimelineCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TimelineCategoryConnectionId = {
  __typename?: 'TimelineCategoryConnectionId';
  connection?: Maybe<TimelineCategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TimelineCategoryConnectionPublished_At = {
  __typename?: 'TimelineCategoryConnectionPublished_at';
  connection?: Maybe<TimelineCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TimelineCategoryConnectionTag = {
  __typename?: 'TimelineCategoryConnectionTag';
  connection?: Maybe<TimelineCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TimelineCategoryConnectionUpdated_At = {
  __typename?: 'TimelineCategoryConnectionUpdated_at';
  connection?: Maybe<TimelineCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TimelineCategoryGroupBy = {
  __typename?: 'TimelineCategoryGroupBy';
  color?: Maybe<Array<Maybe<TimelineCategoryConnectionColor>>>;
  created_at?: Maybe<Array<Maybe<TimelineCategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TimelineCategoryConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TimelineCategoryConnectionPublished_At>>>;
  tag?: Maybe<Array<Maybe<TimelineCategoryConnectionTag>>>;
  updated_at?: Maybe<Array<Maybe<TimelineCategoryConnectionUpdated_At>>>;
};

export type TimelineCategoryInput = {
  color?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  tag?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type TimelineConnection = {
  __typename?: 'TimelineConnection';
  aggregate?: Maybe<TimelineAggregator>;
  groupBy?: Maybe<TimelineGroupBy>;
  values?: Maybe<Array<Maybe<Timeline>>>;
};

export type TimelineConnectionAuthor = {
  __typename?: 'TimelineConnectionAuthor';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TimelineConnectionCreated_At = {
  __typename?: 'TimelineConnectionCreated_at';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TimelineConnectionDate = {
  __typename?: 'TimelineConnectionDate';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TimelineConnectionEvent = {
  __typename?: 'TimelineConnectionEvent';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TimelineConnectionId = {
  __typename?: 'TimelineConnectionId';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TimelineConnectionPublished_At = {
  __typename?: 'TimelineConnectionPublished_at';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TimelineConnectionTimelineCategory = {
  __typename?: 'TimelineConnectionTimelineCategory';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TimelineConnectionUpdated_At = {
  __typename?: 'TimelineConnectionUpdated_at';
  connection?: Maybe<TimelineConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TimelineGroupBy = {
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

export type TimelineInput = {
  author?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['Date']>;
  event?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  timelineCategory?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UploadFile = {
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


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
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

export type UserInput = {
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

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
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

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
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

export type Writer = {
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


export type WriterArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type WriterAggregator = {
  __typename?: 'WriterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WriterConnection = {
  __typename?: 'WriterConnection';
  aggregate?: Maybe<WriterAggregator>;
  groupBy?: Maybe<WriterGroupBy>;
  values?: Maybe<Array<Maybe<Writer>>>;
};

export type WriterConnectionCreated_At = {
  __typename?: 'WriterConnectionCreated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterConnectionEmail = {
  __typename?: 'WriterConnectionEmail';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionId = {
  __typename?: 'WriterConnectionId';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionName = {
  __typename?: 'WriterConnectionName';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionPicture = {
  __typename?: 'WriterConnectionPicture';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionSlug = {
  __typename?: 'WriterConnectionSlug';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionUpdated_At = {
  __typename?: 'WriterConnectionUpdated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterGroupBy = {
  __typename?: 'WriterGroupBy';
  created_at?: Maybe<Array<Maybe<WriterConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<WriterConnectionEmail>>>;
  id?: Maybe<Array<Maybe<WriterConnectionId>>>;
  name?: Maybe<Array<Maybe<WriterConnectionName>>>;
  picture?: Maybe<Array<Maybe<WriterConnectionPicture>>>;
  slug?: Maybe<Array<Maybe<WriterConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<WriterConnectionUpdated_At>>>;
};

export type WriterInput = {
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateAboutInput = {
  data?: Maybe<AboutInput>;
};

export type CreateAboutPayload = {
  __typename?: 'createAboutPayload';
  about?: Maybe<About>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateAuthorTimelineInput = {
  data?: Maybe<AuthorTimelineInput>;
};

export type CreateAuthorTimelinePayload = {
  __typename?: 'createAuthorTimelinePayload';
  authorTimeline?: Maybe<AuthorTimeline>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreateDomainSkillInput = {
  data?: Maybe<DomainSkillInput>;
};

export type CreateDomainSkillPayload = {
  __typename?: 'createDomainSkillPayload';
  domainSkill?: Maybe<DomainSkills>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Project>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSkillInput = {
  data?: Maybe<SkillInput>;
};

export type CreateSkillPayload = {
  __typename?: 'createSkillPayload';
  skill?: Maybe<Skill>;
};

export type CreateTechinalSkillInput = {
  data?: Maybe<TechinalSkillInput>;
};

export type CreateTechinalSkillPayload = {
  __typename?: 'createTechinalSkillPayload';
  techinalSkill?: Maybe<TechinalSkills>;
};

export type CreateTimelineCategoryInput = {
  data?: Maybe<TimelineCategoryInput>;
};

export type CreateTimelineCategoryPayload = {
  __typename?: 'createTimelineCategoryPayload';
  timelineCategory?: Maybe<TimelineCategory>;
};

export type CreateTimelineInput = {
  data?: Maybe<TimelineInput>;
};

export type CreateTimelinePayload = {
  __typename?: 'createTimelinePayload';
  timeline?: Maybe<Timeline>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateWriterInput = {
  data?: Maybe<WriterInput>;
};

export type CreateWriterPayload = {
  __typename?: 'createWriterPayload';
  writer?: Maybe<Writer>;
};

export type DeleteAboutInput = {
  where?: Maybe<InputId>;
};

export type DeleteAboutPagePayload = {
  __typename?: 'deleteAboutPagePayload';
  aboutPage?: Maybe<AboutPage>;
};

export type DeleteAboutPayload = {
  __typename?: 'deleteAboutPayload';
  about?: Maybe<About>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteAuthorTimelineInput = {
  where?: Maybe<InputId>;
};

export type DeleteAuthorTimelinePayload = {
  __typename?: 'deleteAuthorTimelinePayload';
  authorTimeline?: Maybe<AuthorTimeline>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteDomainSkillInput = {
  where?: Maybe<InputId>;
};

export type DeleteDomainSkillPayload = {
  __typename?: 'deleteDomainSkillPayload';
  domainSkill?: Maybe<DomainSkills>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGlobalPayload = {
  __typename?: 'deleteGlobalPayload';
  global?: Maybe<Global>;
};

export type DeleteHomepagePayload = {
  __typename?: 'deleteHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Project>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSkillInput = {
  where?: Maybe<InputId>;
};

export type DeleteSkillPayload = {
  __typename?: 'deleteSkillPayload';
  skill?: Maybe<Skill>;
};

export type DeleteTechinalSkillInput = {
  where?: Maybe<InputId>;
};

export type DeleteTechinalSkillPayload = {
  __typename?: 'deleteTechinalSkillPayload';
  techinalSkill?: Maybe<TechinalSkills>;
};

export type DeleteTimelineCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteTimelineCategoryPayload = {
  __typename?: 'deleteTimelineCategoryPayload';
  timelineCategory?: Maybe<TimelineCategory>;
};

export type DeleteTimelineInput = {
  where?: Maybe<InputId>;
};

export type DeleteTimelinePayload = {
  __typename?: 'deleteTimelinePayload';
  timeline?: Maybe<Timeline>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWriterInput = {
  where?: Maybe<InputId>;
};

export type DeleteWriterPayload = {
  __typename?: 'deleteWriterPayload';
  writer?: Maybe<Writer>;
};

export type EditAboutInput = {
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

export type EditAboutPageInput = {
  author?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  domainSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  techinalSkills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleInput = {
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

export type EditAuthorTimelineInput = {
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  timelineEvents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
  writer?: Maybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentSectionsHeroInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentSharedSeoInput = {
  id?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  shareImage?: Maybe<Scalars['ID']>;
};

export type EditDomainSkillInput = {
  author?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
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

export type EditGlobalInput = {
  created_by?: Maybe<Scalars['ID']>;
  defaultSeo?: Maybe<EditComponentSharedSeoInput>;
  favicon?: Maybe<Scalars['ID']>;
  siteName?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomepageInput = {
  created_by?: Maybe<Scalars['ID']>;
  hero?: Maybe<EditComponentSectionsHeroInput>;
  seo?: Maybe<EditComponentSharedSeoInput>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
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

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditSkillInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type EditTechinalSkillInput = {
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

export type EditTimelineCategoryInput = {
  color?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  tag?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTimelineInput = {
  author?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['Date']>;
  event?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  timelineCategory?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
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

export type EditWriterInput = {
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateAboutInput = {
  data?: Maybe<EditAboutInput>;
  where?: Maybe<InputId>;
};

export type UpdateAboutPageInput = {
  data?: Maybe<EditAboutPageInput>;
};

export type UpdateAboutPagePayload = {
  __typename?: 'updateAboutPagePayload';
  aboutPage?: Maybe<AboutPage>;
};

export type UpdateAboutPayload = {
  __typename?: 'updateAboutPayload';
  about?: Maybe<About>;
};

export type UpdateArticleInput = {
  data?: Maybe<EditArticleInput>;
  where?: Maybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateAuthorTimelineInput = {
  data?: Maybe<EditAuthorTimelineInput>;
  where?: Maybe<InputId>;
};

export type UpdateAuthorTimelinePayload = {
  __typename?: 'updateAuthorTimelinePayload';
  authorTimeline?: Maybe<AuthorTimeline>;
};

export type UpdateCategoryInput = {
  data?: Maybe<EditCategoryInput>;
  where?: Maybe<InputId>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateDomainSkillInput = {
  data?: Maybe<EditDomainSkillInput>;
  where?: Maybe<InputId>;
};

export type UpdateDomainSkillPayload = {
  __typename?: 'updateDomainSkillPayload';
  domainSkill?: Maybe<DomainSkills>;
};

export type UpdateGlobalInput = {
  data?: Maybe<EditGlobalInput>;
};

export type UpdateGlobalPayload = {
  __typename?: 'updateGlobalPayload';
  global?: Maybe<Global>;
};

export type UpdateHomepageInput = {
  data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type UpdateProjectInput = {
  data?: Maybe<EditProjectInput>;
  where?: Maybe<InputId>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Project>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSkillInput = {
  data?: Maybe<EditSkillInput>;
  where?: Maybe<InputId>;
};

export type UpdateSkillPayload = {
  __typename?: 'updateSkillPayload';
  skill?: Maybe<Skill>;
};

export type UpdateTechinalSkillInput = {
  data?: Maybe<EditTechinalSkillInput>;
  where?: Maybe<InputId>;
};

export type UpdateTechinalSkillPayload = {
  __typename?: 'updateTechinalSkillPayload';
  techinalSkill?: Maybe<TechinalSkills>;
};

export type UpdateTimelineCategoryInput = {
  data?: Maybe<EditTimelineCategoryInput>;
  where?: Maybe<InputId>;
};

export type UpdateTimelineCategoryPayload = {
  __typename?: 'updateTimelineCategoryPayload';
  timelineCategory?: Maybe<TimelineCategory>;
};

export type UpdateTimelineInput = {
  data?: Maybe<EditTimelineInput>;
  where?: Maybe<InputId>;
};

export type UpdateTimelinePayload = {
  __typename?: 'updateTimelinePayload';
  timeline?: Maybe<Timeline>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWriterInput = {
  data?: Maybe<EditWriterInput>;
  where?: Maybe<InputId>;
};

export type UpdateWriterPayload = {
  __typename?: 'updateWriterPayload';
  writer?: Maybe<Writer>;
};

export type ArticleMetaPartsFragment = { __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined };

export type ArticlePartsFragment = { __typename?: 'Article', id: string, slug: string, title: string, description: string, content: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined };

export type ArticlePreviousOrNextPartsFragment = { __typename?: 'Article', id: string, title: string, slug: string };

export type AuthorPartsFragment = { __typename?: 'Writer', name?: string | null | undefined };

export type BlogCategoriesPartsFragment = { __typename?: 'Category', name: string, description?: string | null | undefined };

export type CategoryPartsFragment = { __typename?: 'Category', name: string, slug: string };

export type ImagePartsFragment = { __typename?: 'Article', image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined };

export type ProjectMetaPartsFragment = { __typename?: 'Project', id: string, slug?: string | null | undefined, title: string, description: string, isTop?: boolean | null | undefined, deployedLink?: string | null | undefined };

export type ProjectPartsFragment = { __typename?: 'Project', id: string, slug?: string | null | undefined, title: string, description: string, content?: string | null | undefined, deployedLink?: string | null | undefined, githubLink?: string | null | undefined, isTop?: boolean | null | undefined, startDate?: any | null | undefined, endDate?: any | null | undefined, clientName?: string | null | undefined, category?: Enum_Project_Category | null | undefined };

export type ProjectSnapshotPartsFragment = { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined };

export type AboutQueryVariables = Exact<{
  authorSlug: Scalars['String'];
}>;


export type AboutQuery = { __typename?: 'Query', abouts?: Array<{ __typename?: 'About', title?: string | null | undefined, description?: string | null | undefined, technicalSkills?: Array<{ __typename?: 'TechinalSkills', title?: string | null | undefined, description?: string | null | undefined, skills?: Array<{ __typename?: 'Skill', name?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, currentLearningSkills?: Array<{ __typename?: 'Skill', name?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, domainSkills?: Array<{ __typename?: 'DomainSkills', title?: string | null | undefined, description?: string | null | undefined } | null | undefined> | null | undefined, timeline?: { __typename?: 'AuthorTimeline', timelineEvents?: Array<{ __typename?: 'Timeline', event?: string | null | undefined, date?: any | null | undefined, timelineCategory?: { __typename?: 'TimelineCategory', tag?: string | null | undefined, color?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type BlogCategoriesPostsQueryVariables = Exact<{
  categorySlug: Scalars['String'];
  authorSlug: Scalars['String'];
}>;


export type BlogCategoriesPostsQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', name: string, description?: string | null | undefined, articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type BlogCustomSortedPostsQueryVariables = Exact<{
  sortString: Scalars['String'];
  limit: Scalars['Int'];
  authorSlug: Scalars['String'];
}>;


export type BlogCustomSortedPostsQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, content: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined } | null | undefined> | null | undefined };

export type BlogPaginatedCategoriesPostsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  categorySlug: Scalars['String'];
  authorSlug: Scalars['String'];
}>;


export type BlogPaginatedCategoriesPostsQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', name: string, description?: string | null | undefined, articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, articlesConnection?: { __typename?: 'ArticleConnection', aggregate?: { __typename?: 'ArticleAggregator', count?: number | null | undefined } | null | undefined } | null | undefined };

export type BlogPaginatedPostsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  authorSlug: Scalars['String'];
}>;


export type BlogPaginatedPostsQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined, articlesConnection?: { __typename?: 'ArticleConnection', aggregate?: { __typename?: 'ArticleAggregator', count?: number | null | undefined } | null | undefined } | null | undefined };

export type BlogPaginatedSearchQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  query: Scalars['String'];
  authorSlug: Scalars['String'];
}>;


export type BlogPaginatedSearchQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined, articlesConnection?: { __typename?: 'ArticleConnection', aggregate?: { __typename?: 'ArticleAggregator', count?: number | null | undefined } | null | undefined } | null | undefined };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type BlogSearchPostsQueryVariables = Exact<{
  query: Scalars['String'];
  authorSlug: Scalars['String'];
}>;


export type BlogSearchPostsQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type SinglePostQueryVariables = Exact<{
  postSlug: Scalars['String'];
  authorSlug: Scalars['String'];
}>;


export type SinglePostQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug: string, title: string, description: string, content: string, excerpt: string, created_at: any, updated_at: any, views?: any | null | undefined, hits?: any | null | undefined, author?: { __typename?: 'Writer', name?: string | null | undefined } | null | undefined, category?: { __typename?: 'Category', name: string, slug: string } | null | undefined, previous?: { __typename?: 'Article', id: string, title: string, slug: string } | null | undefined, next?: { __typename?: 'Article', id: string, title: string, slug: string } | null | undefined, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id: string, name: string, slug: string } | null | undefined> | null | undefined };

export type ProjectsCategoryQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type ProjectsCategoryQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, slug?: string | null | undefined, title: string, description: string, isTop?: boolean | null | undefined, deployedLink?: string | null | undefined, snapshots?: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type SingleProjectQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SingleProjectQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, slug?: string | null | undefined, title: string, description: string, content?: string | null | undefined, deployedLink?: string | null | undefined, githubLink?: string | null | undefined, isTop?: boolean | null | undefined, startDate?: any | null | undefined, endDate?: any | null | undefined, clientName?: string | null | undefined, category?: Enum_Project_Category | null | undefined, snapshots?: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export const ArticleMetaPartsFragmentDoc = gql`
    fragment articleMetaParts on Article {
  id
  slug
  title
  description
  excerpt
  created_at
  updated_at
  views
  hits
}
    `;
export const ArticlePartsFragmentDoc = gql`
    fragment articleParts on Article {
  id
  slug
  title
  description
  content
  excerpt
  created_at
  updated_at
  views
  hits
}
    `;
export const ArticlePreviousOrNextPartsFragmentDoc = gql`
    fragment articlePreviousOrNextParts on Article {
  id
  title
  slug
}
    `;
export const AuthorPartsFragmentDoc = gql`
    fragment authorParts on Writer {
  name
}
    `;
export const BlogCategoriesPartsFragmentDoc = gql`
    fragment blogCategoriesParts on Category {
  name
  description
}
    `;
export const CategoryPartsFragmentDoc = gql`
    fragment categoryParts on Category {
  name
  slug
}
    `;
export const ImagePartsFragmentDoc = gql`
    fragment imageParts on Article {
  image {
    url
    alternativeText
    caption
    width
    height
  }
}
    `;
export const ProjectMetaPartsFragmentDoc = gql`
    fragment projectMetaParts on Project {
  id
  slug
  title
  description
  isTop
  deployedLink
}
    `;
export const ProjectPartsFragmentDoc = gql`
    fragment projectParts on Project {
  id
  slug
  title
  description
  content
  deployedLink
  githubLink
  isTop
  startDate
  endDate
  clientName
  category
}
    `;
export const ProjectSnapshotPartsFragmentDoc = gql`
    fragment projectSnapshotParts on UploadFile {
  url
  alternativeText
  caption
  width
  height
}
    `;
export const AboutDocument = gql`
    query About($authorSlug: String!) {
  abouts(where: {author: {slug: $authorSlug}}) {
    title
    description
    technicalSkills(sort: "order:asc") {
      title
      description
      skills {
        name
        url
      }
      currentLearningSkills {
        name
        url
      }
    }
    domainSkills(sort: "order:asc") {
      title
      description
    }
    timeline {
      timelineEvents(sort: "date:desc") {
        event
        date
        timelineCategory {
          tag
          color
        }
      }
    }
  }
}
    `;

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
export function useAboutQuery(baseOptions: Apollo.QueryHookOptions<AboutQuery, AboutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
      }
export function useAboutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutQuery, AboutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
        }
export type AboutQueryHookResult = ReturnType<typeof useAboutQuery>;
export type AboutLazyQueryHookResult = ReturnType<typeof useAboutLazyQuery>;
export type AboutQueryResult = Apollo.QueryResult<AboutQuery, AboutQueryVariables>;
export const BlogCategoriesPostsDocument = gql`
    query BlogCategoriesPosts($categorySlug: String!, $authorSlug: String!) {
  categories(where: {slug: $categorySlug, author: {slug: $authorSlug}}) {
    ...blogCategoriesParts
    articles {
      ...articleMetaParts
      ...imageParts
      author {
        ...authorParts
      }
      category {
        ...categoryParts
      }
    }
  }
}
    ${BlogCategoriesPartsFragmentDoc}
${ArticleMetaPartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogCategoriesPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>(BlogCategoriesPostsDocument, options);
      }
export function useBlogCategoriesPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>(BlogCategoriesPostsDocument, options);
        }
export type BlogCategoriesPostsQueryHookResult = ReturnType<typeof useBlogCategoriesPostsQuery>;
export type BlogCategoriesPostsLazyQueryHookResult = ReturnType<typeof useBlogCategoriesPostsLazyQuery>;
export type BlogCategoriesPostsQueryResult = Apollo.QueryResult<BlogCategoriesPostsQuery, BlogCategoriesPostsQueryVariables>;
export const BlogCustomSortedPostsDocument = gql`
    query BlogCustomSortedPosts($sortString: String!, $limit: Int!, $authorSlug: String!) {
  articles(sort: $sortString, limit: $limit, where: {author: {slug: $authorSlug}}) {
    ...articleParts
    author {
      ...authorParts
    }
    category {
      ...categoryParts
    }
  }
}
    ${ArticlePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogCustomSortedPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>(BlogCustomSortedPostsDocument, options);
      }
export function useBlogCustomSortedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>(BlogCustomSortedPostsDocument, options);
        }
export type BlogCustomSortedPostsQueryHookResult = ReturnType<typeof useBlogCustomSortedPostsQuery>;
export type BlogCustomSortedPostsLazyQueryHookResult = ReturnType<typeof useBlogCustomSortedPostsLazyQuery>;
export type BlogCustomSortedPostsQueryResult = Apollo.QueryResult<BlogCustomSortedPostsQuery, BlogCustomSortedPostsQueryVariables>;
export const BlogPaginatedCategoriesPostsDocument = gql`
    query BlogPaginatedCategoriesPosts($offset: Int!, $limit: Int!, $categorySlug: String!, $authorSlug: String!) {
  categories(start: $offset, limit: $limit, where: {slug: $categorySlug}) {
    ...blogCategoriesParts
    articles(where: {author: {slug: $authorSlug}}) {
      ...articleMetaParts
      ...imageParts
      author {
        ...authorParts
      }
      category {
        ...categoryParts
      }
    }
  }
  articlesConnection(
    where: {category: {slug: $categorySlug}, author: {slug: $authorSlug}}
  ) {
    aggregate {
      count
    }
  }
}
    ${BlogCategoriesPartsFragmentDoc}
${ArticleMetaPartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogPaginatedCategoriesPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>(BlogPaginatedCategoriesPostsDocument, options);
      }
export function useBlogPaginatedCategoriesPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>(BlogPaginatedCategoriesPostsDocument, options);
        }
export type BlogPaginatedCategoriesPostsQueryHookResult = ReturnType<typeof useBlogPaginatedCategoriesPostsQuery>;
export type BlogPaginatedCategoriesPostsLazyQueryHookResult = ReturnType<typeof useBlogPaginatedCategoriesPostsLazyQuery>;
export type BlogPaginatedCategoriesPostsQueryResult = Apollo.QueryResult<BlogPaginatedCategoriesPostsQuery, BlogPaginatedCategoriesPostsQueryVariables>;
export const BlogPaginatedPostsDocument = gql`
    query BlogPaginatedPosts($offset: Int!, $limit: Int!, $authorSlug: String!) {
  articles(start: $offset, limit: $limit, where: {author: {slug: $authorSlug}}) {
    ...articleMetaParts
    ...imageParts
    author {
      ...authorParts
    }
    category {
      ...categoryParts
    }
  }
  articlesConnection(where: {author: {slug: $authorSlug}}) {
    aggregate {
      count
    }
  }
}
    ${ArticleMetaPartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogPaginatedPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>(BlogPaginatedPostsDocument, options);
      }
export function useBlogPaginatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>(BlogPaginatedPostsDocument, options);
        }
export type BlogPaginatedPostsQueryHookResult = ReturnType<typeof useBlogPaginatedPostsQuery>;
export type BlogPaginatedPostsLazyQueryHookResult = ReturnType<typeof useBlogPaginatedPostsLazyQuery>;
export type BlogPaginatedPostsQueryResult = Apollo.QueryResult<BlogPaginatedPostsQuery, BlogPaginatedPostsQueryVariables>;
export const BlogPaginatedSearchDocument = gql`
    query BlogPaginatedSearch($limit: Int!, $offset: Int!, $query: String!, $authorSlug: String!) {
  articles(
    start: $offset
    limit: $limit
    where: {_q: $query, author: {slug: $authorSlug}}
  ) {
    ...articleMetaParts
    ...imageParts
    author {
      ...authorParts
    }
    category {
      ...categoryParts
    }
  }
  articlesConnection(where: {_q: $query, author: {slug: $authorSlug}}) {
    aggregate {
      count
    }
  }
}
    ${ArticleMetaPartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogPaginatedSearchQuery(baseOptions: Apollo.QueryHookOptions<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>(BlogPaginatedSearchDocument, options);
      }
export function useBlogPaginatedSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>(BlogPaginatedSearchDocument, options);
        }
export type BlogPaginatedSearchQueryHookResult = ReturnType<typeof useBlogPaginatedSearchQuery>;
export type BlogPaginatedSearchLazyQueryHookResult = ReturnType<typeof useBlogPaginatedSearchLazyQuery>;
export type BlogPaginatedSearchQueryResult = Apollo.QueryResult<BlogPaginatedSearchQuery, BlogPaginatedSearchQueryVariables>;
export const BlogPostsDocument = gql`
    query BlogPosts {
  articles {
    ...articleMetaParts
    ...imageParts
    author {
      ...authorParts
    }
    category {
      ...categoryParts
    }
  }
}
    ${ArticleMetaPartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogPostsQuery(baseOptions?: Apollo.QueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
      }
export function useBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
        }
export type BlogPostsQueryHookResult = ReturnType<typeof useBlogPostsQuery>;
export type BlogPostsLazyQueryHookResult = ReturnType<typeof useBlogPostsLazyQuery>;
export type BlogPostsQueryResult = Apollo.QueryResult<BlogPostsQuery, BlogPostsQueryVariables>;
export const BlogSearchPostsDocument = gql`
    query BlogSearchPosts($query: String!, $authorSlug: String!) {
  articles(where: {_q: $query, author: {slug: $authorSlug}}) {
    ...articleMetaParts
    ...imageParts
    author {
      ...authorParts
    }
    category {
      ...categoryParts
    }
  }
}
    ${ArticleMetaPartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

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
export function useBlogSearchPostsQuery(baseOptions: Apollo.QueryHookOptions<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>(BlogSearchPostsDocument, options);
      }
export function useBlogSearchPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>(BlogSearchPostsDocument, options);
        }
export type BlogSearchPostsQueryHookResult = ReturnType<typeof useBlogSearchPostsQuery>;
export type BlogSearchPostsLazyQueryHookResult = ReturnType<typeof useBlogSearchPostsLazyQuery>;
export type BlogSearchPostsQueryResult = Apollo.QueryResult<BlogSearchPostsQuery, BlogSearchPostsQueryVariables>;
export const SinglePostDocument = gql`
    query SinglePost($postSlug: String!, $authorSlug: String!) {
  articles(where: {slug: $postSlug, author: {slug: $authorSlug}}) {
    ...articleParts
    ...imageParts
    author {
      ...authorParts
    }
    category {
      ...categoryParts
    }
    previous {
      ...articlePreviousOrNextParts
    }
    next {
      ...articlePreviousOrNextParts
    }
  }
}
    ${ArticlePartsFragmentDoc}
${ImagePartsFragmentDoc}
${AuthorPartsFragmentDoc}
${CategoryPartsFragmentDoc}
${ArticlePreviousOrNextPartsFragmentDoc}`;

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
export function useSinglePostQuery(baseOptions: Apollo.QueryHookOptions<SinglePostQuery, SinglePostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, options);
      }
export function useSinglePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SinglePostQuery, SinglePostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, options);
        }
export type SinglePostQueryHookResult = ReturnType<typeof useSinglePostQuery>;
export type SinglePostLazyQueryHookResult = ReturnType<typeof useSinglePostLazyQuery>;
export type SinglePostQueryResult = Apollo.QueryResult<SinglePostQuery, SinglePostQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
    slug
  }
}
    `;

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
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ProjectsCategoryDocument = gql`
    query ProjectsCategory($category: String!) {
  projects(where: {category: $category}) {
    ...projectMetaParts
    snapshots {
      ...projectSnapshotParts
    }
  }
}
    ${ProjectMetaPartsFragmentDoc}
${ProjectSnapshotPartsFragmentDoc}`;

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
export function useProjectsCategoryQuery(baseOptions: Apollo.QueryHookOptions<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>(ProjectsCategoryDocument, options);
      }
export function useProjectsCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>(ProjectsCategoryDocument, options);
        }
export type ProjectsCategoryQueryHookResult = ReturnType<typeof useProjectsCategoryQuery>;
export type ProjectsCategoryLazyQueryHookResult = ReturnType<typeof useProjectsCategoryLazyQuery>;
export type ProjectsCategoryQueryResult = Apollo.QueryResult<ProjectsCategoryQuery, ProjectsCategoryQueryVariables>;
export const SingleProjectDocument = gql`
    query SingleProject($slug: String!) {
  projects(where: {slug: $slug}) {
    ...projectParts
    snapshots {
      ...projectSnapshotParts
    }
  }
}
    ${ProjectPartsFragmentDoc}
${ProjectSnapshotPartsFragmentDoc}`;

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
export function useSingleProjectQuery(baseOptions: Apollo.QueryHookOptions<SingleProjectQuery, SingleProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleProjectQuery, SingleProjectQueryVariables>(SingleProjectDocument, options);
      }
export function useSingleProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProjectQuery, SingleProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleProjectQuery, SingleProjectQueryVariables>(SingleProjectDocument, options);
        }
export type SingleProjectQueryHookResult = ReturnType<typeof useSingleProjectQuery>;
export type SingleProjectLazyQueryHookResult = ReturnType<typeof useSingleProjectLazyQuery>;
export type SingleProjectQueryResult = Apollo.QueryResult<SingleProjectQuery, SingleProjectQueryVariables>;