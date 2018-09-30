const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

require(`./server.${process.env.NODE_ENV}`)(app)

app.get('/healthcheck', (req, res) => {
  res.sendStatus(200)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
