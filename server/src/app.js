const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
// const path = require('path')

const app = express()

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

require('./routes')(app)

app.listen(config.port, function () {
  console.log('Server started on port ', config.port)
})
