const express = require('express')
const envalid = require('envalid')

const buildRouter = require('./router')

const PORT = process.env.PORT
const app = {
  env: envalid.cleanEnv(process.env, {
    PORT: envalid.num()
  }),
  server: express()
}

buildRouter(app)

app.server.listen(PORT, (req, res) => {
  console.log(`> App is now listening on port ${PORT}`)
})
