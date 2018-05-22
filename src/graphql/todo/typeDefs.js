const typeDefs = `
  type TODO {
    _id: String,
    title: String,
    body: String
  }

  type Query {
    # Function get all todos.
    getAllTodos: [TODO]
  }

  type Mutation {
    # Function add new todo.
    addTodo(title: String!, body: String!): TODO
  }
`

export default typeDefs