import { DataType } from '..'
import nodeCache from 'node-cache'

declare module 'fastify' {
  export interface FastifyInstance {
    cache: nodeCache
    data: DataType
  }
}
