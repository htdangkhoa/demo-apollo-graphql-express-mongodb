import User from '../../models/user'
import { sign, verify } from '../../utils//jwt'

const addUser = async (_, args) => {
  let { email, password } = args

  let user = new User({
    email,
    password
  })

  try {
    let result = await user.save()
    
    return result
  } catch (error) {
    throw error
  }
}

const getAllUsers = async (_, args, context) => {
  let { token } = context

  let payload = await verify(token)
  
  if (!payload) throw 'invalid token.'

  let users = await User.find()

  return users
}

const login = async (root, args) => {
  let { req } = root
  if (req.session.token) throw `You're already login.`

  let { email, password } = args.request

  let user = await User.findOne({ email })

  if (!user || user.password != password) throw `Email or password is not correct.`

  let token = await sign(user)
  req.session.token = token

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