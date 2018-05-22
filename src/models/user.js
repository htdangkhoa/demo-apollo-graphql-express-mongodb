import mongoose, { Schema } from 'mongoose'

const User = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => {
      return mongoose.Types.ObjectId()
    }
  },
  username: {
    type: Schema.Types.String,
    unique: true
  },
  password: {
    type: Schema.Types.String
  }
})

export default mongoose.model('user', User)