const express = require('express')
const path = require('path')

const buildRouter = app => {
  app.server.use('/app', express.static(path.join(__dirname, '..', 'dist')))

  app.server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
  })
}

module.exports = buildRouter
