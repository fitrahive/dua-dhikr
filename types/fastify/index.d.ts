import nodeCache from 'node-cache'
import { DataType } from '../../src/types'

declare module 'fastify' {
  export interface FastifyInstance {
    cache: nodeCache
    data: DataType
  }
}
