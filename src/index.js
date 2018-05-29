import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import {  graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import schema from './graphql'

import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import './utils//logger'

dotenv.config()

mongoose.connect(process.env.DB, (error, db) => {
  if (error) return console.error(error);

  return console.info('Connect mongoDB successful')
})

const app = express()
const ws = createServer(app)

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
])

app.use('/graphql', graphqlExpress((req, res) => {
  const token = req.headers.authorization
  return {
    schema,
    context: { token }
  }
}))
app.use('/graphiql', graphiqlExpress({ 
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${process.env.PORT}/subscriptions`
}))

ws.listen(process.env.PORT, () => {
  console.info(`Server is running on port ${process.env.PORT}`)

  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions'
  })
})