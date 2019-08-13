import * as express from 'express'
import * as path from 'path'

import { App } from '../types/app'

const buildRouter = (app: App) => {
  // Handle static folder
  app.server.use('/app', express.static(
    path.join(__dirname, '..', '..', 'dist'))
  )

  // Main app entrypoint
  app.server.get('/', (_req: express.Request, res: express.Response) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'dist', 'index.html')
    )
  })
}

export default buildRouter
