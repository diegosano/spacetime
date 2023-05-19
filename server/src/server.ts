import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'

import { memoriesRoutes } from './routes/memories'
import fastifyJwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(fastifyJwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP server running on http://localhost:3333 🚀'))
