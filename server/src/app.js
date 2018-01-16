const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const path = require('path')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('combined'))
app.use(cors())

// Routes
app.get('/', function (req, res) {

})

app.post('/register', function (req, res) {
  res.send({
    message: `User ${req.body.email} registered`
  })
})

app.post('/login', function (req, res) {
  res.send({
    message: `User ${req.body.email} successfully logged in...`
  })
})

app.get('/status', function (req, res) {
  res.send({
    message: 'Server is available'
  })
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Server started on port ', port)
})
