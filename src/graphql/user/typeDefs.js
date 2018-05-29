const typeDefs = `
  type User {
    _id: String
    username: String
    password: String!
  }

  input AuthenticateRequest {
    email: String!
    password: String!
  }

  type Authenticate {
    token: String
  }

  type Query {
    # Function get all users.
    getAllUsers: [User]
    # Function login.
    login(request: AuthenticateRequest!): Authenticate
  }

  type Mutation {
    # Function add new user.
    addUser(username: String!, password: String!): User
  }
`

export default typeDefs