import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GithubData = {
  __typename?: 'GithubData';
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isHireable?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pinnedItems?: Maybe<Array<Maybe<RepositoryEdge>>>;
};


export type GithubDataAvatarUrlArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


export type GithubDataPinnedItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<GithubData>;
};


export type QueryUserArgs = {
  login: Scalars['String'];
};

export type Repository = {
  __typename?: 'Repository';
  description?: Maybe<Scalars['String']>;
  homepageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RepositoryEdge = {
  __typename?: 'RepositoryEdge';
  edges?: Maybe<Array<Maybe<RepositoryNode>>>;
};

export type RepositoryNode = {
  __typename?: 'RepositoryNode';
  node?: Maybe<Repository>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  GithubData: ResolverTypeWrapper<GithubData>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Repository: ResolverTypeWrapper<Repository>;
  RepositoryEdge: ResolverTypeWrapper<RepositoryEdge>;
  RepositoryNode: ResolverTypeWrapper<RepositoryNode>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  GithubData: GithubData;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  Repository: Repository;
  RepositoryEdge: RepositoryEdge;
  RepositoryNode: RepositoryNode;
  String: Scalars['String'];
};

export type GithubDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubData'] = ResolversParentTypes['GithubData']> = {
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<GithubDataAvatarUrlArgs>>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isHireable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinnedItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['RepositoryEdge']>>>, ParentType, ContextType, Partial<GithubDataPinnedItemsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<Maybe<ResolversTypes['GithubData']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'login'>>;
};

export type RepositoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Repository'] = ResolversParentTypes['Repository']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepositoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RepositoryEdge'] = ResolversParentTypes['RepositoryEdge']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['RepositoryNode']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepositoryNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RepositoryNode'] = ResolversParentTypes['RepositoryNode']> = {
  node?: Resolver<Maybe<ResolversTypes['Repository']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  GithubData?: GithubDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repository?: RepositoryResolvers<ContextType>;
  RepositoryEdge?: RepositoryEdgeResolvers<ContextType>;
  RepositoryNode?: RepositoryNodeResolvers<ContextType>;
};

