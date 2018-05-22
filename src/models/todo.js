import mongoose, { Schema } from 'mongoose'

const Todo = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => mongoose.Types.ObjectId()
  },
  title: {
    type: Schema.Types.String,
    required: true
  },
  body: {
    type: Schema.Types.String
  }
})

export default mongoose.model('todo', Todo)