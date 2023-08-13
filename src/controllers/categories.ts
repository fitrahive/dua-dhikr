import { CategoryType, DetailType } from '../types'
import { createSpecResponse, sendNotFound } from '../utils/spec'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const categories = (app: FastifyInstance) => {
  return (request: FastifyRequest, reply: FastifyReply) => {
    const language = request.headers['accept-language'] || 'id'

    if (!(language in app.data.categories)) {
      return sendNotFound(reply)
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
    const language = request.headers['accept-language'] || 'id'
    const { slug } = request.params
    const category = (app.data.categories[language] as CategoryType[]).find((i) => i.slug === slug)

    if (!category || !(slug in app.data.items) || !(language in app.data.items[slug])) {
      return sendNotFound(reply)
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
    const language = request.headers['accept-language'] || 'id'
    const { slug, id } = request.params
    const category = (app.data.categories[language] as CategoryType[]).find((i) => i.slug === slug)
    const index = Number(id) - 1

    if (
      !category ||
      !(slug in app.data.items) ||
      !(language in app.data.items[slug]) ||
      !(index in app.data.items[slug][language])
    ) {
      return sendNotFound(reply)
    }

    const item = app.data.items[slug][language][index]

    const response = createSpecResponse({
      id: Number(id),
      title: item.title,
      category: slug,
      categoryName: category.name,
      arabic: item.arabic,
      latin: item.translation,
      translation: item.translation,
      notes: item.notes,
      fawaid: item.fawaid,
      source: item.source,
    })

    return reply.send(response)
  }
}
