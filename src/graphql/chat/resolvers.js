import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()
const CHANNEL_ADDED_TOPIC = 'chat'

var messages = []

const chats = () => {
  return messages
}

const sendMessage = (_, args) => {
  let { username, message } = args
  console.log(args)
  let chat = { username, message }

  messages.push(chat)

  pubsub.publish(CHANNEL_ADDED_TOPIC, { letsListen: chat })

  return chat
}

const letsListen = {
  subscribe: () => pubsub.asyncIterator(CHANNEL_ADDED_TOPIC)
}

export default {
  Query: {
    chats
  },
  Mutation: {
    sendMessage
  },
  Subscription: {
    letsListen
  }
}