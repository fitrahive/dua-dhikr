import { home } from './controllers/home'
import { FastifyInstance } from 'fastify'
import { languages } from './controllers/languages'
import { categories, detail, list } from './controllers/categories'

export const routes = (app: FastifyInstance) => {
  app.get('/', home)
  app.get('/languages', languages(app))

  app.get('/categories', categories(app))
  app.get('/categories/:slug', list(app))
  app.get('/categories/:slug/:id', detail(app))
}
