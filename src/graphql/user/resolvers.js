import User from '../../models/user'

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

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find()
    .then(users => resolve(users))
    .catch(error => reject(error))
  })
}

export default {
  Query: {
    getAllUsers
  },
  Mutation: {
    addUser
  }
}