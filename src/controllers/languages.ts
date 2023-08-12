import { createSpecResponse } from '../utils/spec'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const languages = (app: FastifyInstance) => {
  return (_: FastifyRequest, reply: FastifyReply) => {
    const result = Object.values(app.data.languages)

    const response = createSpecResponse(result)
    return reply.send(response)
  }
}
