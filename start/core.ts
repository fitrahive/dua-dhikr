import { routes } from './routes'
import nodeCache from 'node-cache'
import { read } from '../app/helpers/data'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

const load = async (app: FastifyInstance, _: FastifyPluginOptions) => {
  const cache = new nodeCache({ stdTTL: 10 })

  const languages = await read('core', 'languages.json')
  const categories = await read('core', 'categories.json')
  const items: Record<string, any> = {}

  for (const language in categories) {
    for (const category of categories[language]) {
      const content = await read('dua-dhikr', category.slug, `${language}.json`)

      if (!(category.slug in items)) {
        items[category.slug] = { [language]: content }
      } else {
        items[category.slug][language] = content
      }
    }
  }

  const data = { languages, categories, items }

  app.decorate('cache', cache)
  app.decorate('data', data)

  routes(app)
}

export default load
