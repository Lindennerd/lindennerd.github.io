const typeDefs = /* GraphQL */ `
  type GithubData {
    avatarUrl(size: Int): String
    bio: String
    company: String
    email: String
    name: String
    login: String
    location: String
    isHireable: Boolean
    pinnedItems(first: Int): [RepositoryEdge]
  }

  type RepositoryEdge {
    edges: [RepositoryNode]
  }

  type RepositoryNode {
    node: Repository
  }

  type Repository {
    id: ID
    name: String
    description: String
    homepageUrl: String
    url: String
    updatedAt: String
  }

  type Query {
    user(login: String!): GithubData
  }
`;

export default typeDefs;
