import jwt from 'jsonwebtoken'
import User from '../models/user'

const secret = 'c86306d0-d0ed-43c4-82ed-8654a18ce11d'

const sign = async (payload) => {
  if (typeof payload === "object") payload = JSON.stringify(payload)

  return await jwt.sign(payload, secret)
}

const verify = async (token, cb) => {
  if (!token) throw `You are missing token.`

  let _tk = token.split('Bearer ')[1]

  if (!_tk) throw `invalid token.`

  let payload = await jwt.verify(_tk, secret, cb)
  let { email, password } = payload

  let user = await User.findOne({
    email,
    password
  })

  if (!user) throw `invalid token.`

  return user
}

export {
  sign,
  verify
}