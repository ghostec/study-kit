const express = require('express')
const path = require('path')

process.on('SIGTERM', async () => {
  process.exit(0)
})

module.exports = app => {
  app.use(express.static('public'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })
}
