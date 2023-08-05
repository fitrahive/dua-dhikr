import pino from 'pino'
import nodeCache from 'node-cache'
import { list, read, toName } from './utils'
import { ContentType, ListType } from './interfaces'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'

const app = async () => {
  try {
    const cache = new nodeCache({ stdTTL: 10 })

    const port = Number(process.env.PORT || 3000)
    const server = fastify({
      ignoreTrailingSlash: true,
      caseSensitive: false,
      logger: pino({ level: 'info' }),
    })

    await server.register(import('@fastify/compress'))
    await server.register(import('@fastify/etag'))
    await server.register(import('@fastify/rate-limit'), { max: 2, timeWindow: '1 second' })

    server.decorate('notFound', (_: FastifyRequest, reply: FastifyReply) => {
      return reply.status(404).send({
        statusCode: 404,
        code: 'NOT_FOUND',
        message: 'This endpoint cannot be found.',
      })
    })

    // @ts-ignore
    server.setNotFoundHandler(server.notFound)
    server.setErrorHandler((error, _request, reply) => {
      if (error.statusCode === 429) {
        return reply.status(429).send({
          statusCode: 429,
          code: 'TOO_MANY_REQUESTS',
          message: 'Request limit: 2x per second.',
        })
      }

      return reply.status(500).send({
        statusCode: 500,
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Please contact the developer.',
      })
    })

    server.get('/', (_request, reply) => {
      reply.redirect(302, 'https://github.com/fitrahive/dua-dhikr')
    })

    server.get<{ Params: { lang: string } }>('/:lang', async (request, reply) => {
      const { lang } = request.params

      if (cache.has(lang)) {
        return reply.status(200).send(cache.get(lang))
      }

      const files = await list(lang)
      const data = files!.map((path) => {
        const file = path.replace(/\.json$/, '')
        const name = toName(file)
        const link = `${request.protocol}://${request.hostname}/${lang}/${file}`

        return { name, link }
      })

      const response = { statusCode: 200, code: 'OK', data }
      cache.set(lang, response)

      return reply.status(200).send(response)
    })

    server.get<{ Params: ListType }>('/:lang/:category', async (request, reply) => {
      const { lang, category } = request.params
      const key = `${lang}-${category}`

      if (cache.has(key)) {
        return reply.status(200).send(cache.get(key))
      }

      const content = await read(lang, category)

      if (!content) {
        // @ts-ignore
        return server.notFound(request, reply)
      }

      const data = Object.entries(content).map((item: any[]) => {
        const id = Number(item[0]) + 1
        const link = `${request.protocol}://${request.hostname}/${lang}/${category}/${id}`

        return { id, title: item[1].title, link }
      })

      const response = { statusCode: 200, code: 'OK', data }
      cache.set(key, response)

      return reply.status(200).send(response)
    })

    server.get<{ Params: ContentType }>('/:lang/:category/:id', async (request, reply) => {
      const { lang, category, id } = request.params
      const key = `${lang}-${category}-${id}`

      if (cache.has(key)) {
        return reply.status(200).send(cache.get(key))
      }

      const content = await read(lang, category)

      if (!content || !content[id - 1]) {
        // @ts-ignore
        return server.notFound(request, reply)
      }

      const response = { statusCode: 200, code: 'OK', data: content[id - 1] }
      cache.set(key, response)

      return reply.status(200).send(response)
    })

    if (process.env.NODE_ENV === 'production') {
      for (const signal of ['SIGINT', 'SIGTERM']) {
        process.on(signal, () => {
          server.close().then((err) => {
            console.log(`close application on ${signal}`)
            process.exit(err ? 1 : 0)
          })
        })
      }
    }

    await server.listen({ port })
  } catch (e) {
    console.error(e)
  }
}

process.on('unhandledRejection', (e) => {
  console.error(e)
  process.exit(1)
})

app()
