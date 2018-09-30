import { routes } from './routes'

export const generateURL =
  ({ name, options }) => args => routes.generate(name, { ...options, ...args })
