import Todo from '../../models/todo'

const getAllTodos = () => {
  return new Promise((resolve, reject) => {
    Todo.find()
    .then(todos => resolve(todos))
    .catch(error => reject(error))
  })
}

const addTodo = (_, args) => {
  let { title, body } = args

  return new Promise((resolve, reject) => {
    new Todo({
      title,
      body
    }).save((error, todo) => {
      if (error) return reject(error)

      return resolve(todo)
    })
  })
}

export default {
  Query: {
    getAllTodos
  },
  Mutation: {
    addTodo
  }
}