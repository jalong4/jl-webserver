const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()

app.use(express.static('dist'))

mongoose.connect(config.mongoDbUri, function (err, db) {
  if (err) {
    console.log('Unable to connect to the server. Please start the server. Error:', err)
  } else {
    console.log(`Connected to mongodb at uri: ${config.mongoDbUri}`)
  }
})

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(morgan('combined'))
app.use(cors())

app.use(function (req, res, next) {
  for (let key in req.query) {
    let value = req.query[key]
    req.query[key.toLowerCase()] = value.toLowerCase()
  }
  next()
})

require('./routes')(app)

app.listen(config.port, function () {
  console.log('Server started on port ', config.port)
})
