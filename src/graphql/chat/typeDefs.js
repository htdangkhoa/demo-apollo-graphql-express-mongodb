const typeDefs = `
  type Chat {
    username: String!
    message: String
  }

  type Query {
    chats: [Chat]
  }

  type Mutation {
    # Function send message.
    sendMessage(username: String!, message: String!): Chat
  }

  type Subscription {
    letsListen: Chat
  }
`

export default typeDefs