import { FastifyReply, FastifyRequest } from 'fastify'

export const home = async (_: FastifyRequest, reply: FastifyReply) => {
  return reply.redirect('https://github.com/fitrahive/dua-dhikr')
}
