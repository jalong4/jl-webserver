var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()
// Body Parser Middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path
app.use(express.static(path.join(__dirname, 'client')))
// Routes
app.get('/', function (req, res) {

})

const port = 3000

app.listen(port, function () {
  console.log('Server started on port', port)
})
