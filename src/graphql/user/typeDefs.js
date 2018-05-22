const typeDefs = `
  type User {
    _id: String
    username: String
    password: String!
  }

  type Query {
    # Function get all users.
    getAllUsers: [User]
  }

  type Mutation {
    # Function add new user.
    addUser(username: String!, password: String!): User
  }
`

export default typeDefs