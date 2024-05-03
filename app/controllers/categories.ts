import { CategoryType, DetailType } from '../../types'
import { createSpecResponse, sendBadRequest, sendNotFound } from '../helpers/spec'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const categories = (app: FastifyInstance) => {
  return (request: FastifyRequest, reply: FastifyReply) => {
    const language = request.languages()?.[0] || 'id'

    if (!(language in app.data.categories)) {
      return sendBadRequest(reply, 'The language you requested is not available yet.')
    }

    const result = app.data.categories[language].map(
      (category: CategoryType & { total?: number }) => {
        const total = app.data.items[category.slug][language].length
        return { ...category, total }
      }
    )

    const response = createSpecResponse(result)
    return reply.send(response)
  }
}

export const list = (app: FastifyInstance) => {
  return (request: FastifyRequest<{ Params: { slug: string } }>, reply: FastifyReply) => {
    const language = request.languages()?.[0] || 'id'
    const { slug } = request.params
    const category = (app.data.categories[language] as CategoryType[]).find((i) => i.slug === slug)

    if (!category || !(slug in app.data.items)) {
      return sendNotFound(reply)
    }

    if (!(language in app.data.items[slug])) {
      return sendBadRequest(reply, 'The language you requested is not available yet.')
    }

    const items = app.data.items[slug][language]
    const result = Object.keys(items).map((index) => {
      const item: DetailType = items[index]
      const id = Number(index) + 1
      return { id, title: item.title, category: slug, categoryName: category.name }
    })

    const response = createSpecResponse(result)
    return reply.send(response)
  }
}

export const detail = (app: FastifyInstance) => {
  return (
    request: FastifyRequest<{ Params: { slug: string; id: number } }>,
    reply: FastifyReply
  ) => {
    const language = request.languages()?.[0] || 'id'
    const { slug, id } = request.params
    const category = (app.data.categories[language] as CategoryType[]).find((i) => i.slug === slug)
    const index = Number(id) - 1

    if (!category || !(slug in app.data.items)) {
      return sendNotFound(reply)
    }

    if (!(language in app.data.items[slug]) || !(index in app.data.items[slug][language])) {
      return sendBadRequest(reply, 'The language you requested is not available yet.')
    }

    const item = app.data.items[slug][language][index]
    const response = createSpecResponse({
      id: Number(id),
      title: item.title,
      category: slug,
      categoryName: category.name,
      arabic: item.arabic,
      latin: item.latin,
      translation: item.translation,
      notes: item.notes,
      fawaid: item.fawaid,
      source: item.source,
    })

    return reply.send(response)
  }
}
