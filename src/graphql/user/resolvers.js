import User from '../../models/user'
import { sign, verify } from '../../utils//jwt'

const addUser = (_, args) => {
  let { username, password } = args
  return new Promise((resolve, reject) => {
    new User({
      username,
      password
    }).save((error, user) => {
      if (error) return reject(error)

      return resolve(user)
    })
  })
}

const getAllUsers = (_, args, context) => {
  let { token } = context
  
  var payload = verify(token)

  return new Promise((resolve, reject) => {
    if (payload) {
      User.find()
      .then(users => resolve(users))
      .catch(error => reject(error))
    } else {
      reject(`invalid token.`)
    }
  })
}

const login = (_, args) => {
  let { email, password } = args
  let token = sign({ email, password })

  return { token }
}

export default {
  Query: {
    getAllUsers,
    login
  },
  Mutation: {
    addUser
  }
}