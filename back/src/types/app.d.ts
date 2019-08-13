import { Application as ExpressApplication } from 'express'

export interface Env {
  PORT: number
}

export interface App {
  env: Env,
  server: ExpressApplication
}
