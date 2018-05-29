import Todo from '../../models/todo'
import { verify } from '../../utils/jwt'

const getAllTodos = async (_, args, context) => {
  let { token } = context

  var payload = await verify(token)
  
  if (!payload) throw 'invalid token.'
  
  var todos = await Todo.find()

  return todos
}

const addTodo = async (_, args, context) => {
  let { title, body } = args
  
  let todo = new Todo({
    title,
    body
  })

  try {
    let result = await todo.save()

    return result
  } catch (error) {
    throw error
  }
}

export default {
  Query: {
    getAllTodos
  },
  Mutation: {
    addTodo
  }
}