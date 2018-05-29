import mongoose, { Schema } from 'mongoose'

const User = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => mongoose.Types.ObjectId()
  },
  email: {
    type: Schema.Types.String,
    lowercase: true,
    unique: true
  },
  password: {
    type: Schema.Types.String
  }
})

export default mongoose.model('user', User)