import jwt from 'jsonwebtoken'

const secret = 'c86306d0-d0ed-43c4-82ed-8654a18ce11d'

const sign = (payload) => {
  return jwt.sign(payload, secret)
}

const verify = (token, cb) => {
  if (!token) return undefined

  let _tk = token.split('Bearer ')[1]

  if (!_tk) return undefined

  return jwt.verify(_tk, secret, cb)
}

export {
  sign,
  verify
}