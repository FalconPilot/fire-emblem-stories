import * as express from 'express'
import * as envalid from 'envalid'

import { App } from './types/app'

import buildRouter from './router'

const app: App = {
  env: envalid.cleanEnv(process.env, {
    PORT: envalid.num(),
    DATABASE_URL: envalid.url()
  }),
  server: express()
}

const PORT: number = app.env.PORT

buildRouter(app)

app.server.listen(PORT, () => {
  console.log(`> App is now listening on port ${PORT}`)
})
