import { mergeSchemas } from 'graphql-tools'
import user from './user'
import todo from './todo'
import chat from './chat'

export default mergeSchemas({
  schemas: [user, todo, chat]
})