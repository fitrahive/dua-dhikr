import { FastifyInstance } from 'fastify'
import { home } from '../app/controllers/home'
import { languages } from '../app/controllers/languages'
import { categories, detail, list } from '../app/controllers/categories'

export const routes = (app: FastifyInstance) => {
  app.get('/', home)
  app.get('/languages', languages(app))

  app.get('/categories', categories(app))
  app.get('/categories/:slug', list(app))
  app.get('/categories/:slug/:id', detail(app))
}
