export default `
  type User {
    id: ID!
    name: String!
    comments: [Comment!]!
  }
  type Comment {
    id: ID!
    content: String!
    userId: ID!
    user: User!
  }
  type Query {
    comments: [Comment!]!
    comment(id: ID!): Comment
    user(id: ID!): User
    users: [User!]!
  }
  type Mutation {
    createComment(content:String!, userId: ID!): Comment!
    createUser(name:String!): User!
    updateComment(id: ID!, content:String!): [Int!]!
    deleteComment(id: ID!): Int!
  }
`;
