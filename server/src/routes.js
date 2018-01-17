module.exports = (app) => {
  const Users = require('./models/users')
  const Media = require('./models/media')
  const Projects = require('./models/projects')

  app.post('/login', function (req, res) {
    const email = req.body.email
    Users.getUserByAttribute({'email': email}, function (err, user) {
      if (err) {
        res.send({
          message: err.message
        })
      } else if (!user) {
        res.send({
          message: 'Invalid email or password, please try again'
        })
      } else if (user.password === req.body.password) {
        res.send({
          user: user,
          message: `User ${req.body.email} successfully logged in...`
        })
      } else {
        res.send({
          message: 'Invalid email or password, please try again'
        })
      }
    })
  })

  app.post('/register', function (req, res) {
    const newUser = req.body
    const email = newUser.email
    Users.getUserByAttribute({'email': email}, function (err, user) {
      if (err) {
        res.send({
          message: err.message
        })
      } else if (user) {
        res.send({
          message: `Email ${email} is already registered.`
        })
      } else {
        console.log(`Creating user ${newUser}`)
        Users.createUser(newUser, function (err, user) {
          if (err) {
            res.send({
              message: err.message
            })
          }
          console.log(`User ${user.email} successfully registered...`)
          res.json(user)
        })
      }
    })
  })

  app.get('/users', function (req, res) {
    Users.getUsers(function (err, users) {
      if (err) {
        res.send({
          message: err.message
        })
      }
      res.json(users)
    })
  })
  app.get('/user/:id', function (req, res) {
    Users.getUserById(req.params.id, function (err, user) {
      if (err) {
        res.send({
          message: err.message
        })
      }
      res.json(user)
    })
  })

  app.delete('/user/:id', function (req, res) {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      Users.deleteUserById(req.params.id, function (err, response) {
        const statusCode = JSON.parse(response).n
        if (err) {
          res.send({
            message: err.message
          })
        } else if (statusCode === 0) {
          res.send({message: `User Id: ${req.params.id} does not exist.`})
        } else {
          res.send({message: `Deleted userId ${req.params.id}`})
        }
      })
    } else {
      res.send({
        message: `Invalid User Id: ${req.params.id}`
      })
    }
  })

  app.delete('/user', function (req, res) { // /user?email=${email}
    const email = req.query.email
    Users.getUserByAttribute({'email': email}, function (err, deleteUser) {
      if (err) {
        res.send({
          message: err.message
        })
      } else if (!deleteUser) {
        res.send({
          message: `User for email ${email} not found`
        })
      } else {
        Users.deleteUserById(deleteUser.id, function (err, user) {
          if (err) {
            res.send({
              message: err.message
            })
          }
          res.send({message: `Deleted userId ${deleteUser.id}`})
        })
      }
    })
  })

  app.get('/user', function (req, res) { // /user?email=${email}
    const email = req.query.email
    Users.getUserByAttribute({'email': email}, function (err, user) {
      if (err) {
        res.send({
          message: err.message
        })
      } else if (!user) {
        res.send({
          message: `Email ${email} not found`
        })
      } else {
        res.send({
          user: user,
          message: `Found user ${email}`
        })
      }
    })
  })

  app.get('/media', function (req, res) {
    Media.getMedia(function (err, media) {
      if (err) {
        res.send({
          message: err.message
        })
      }
      res.json(media)
    })
  })

  app.get('/projects', function (req, res) {
    Projects.getProjects(function (err, projects) {
      if (err) {
        res.send({
          message: err.message
        })
      }
      res.json(projects)
    })
  })

  app.get('/status', function (req, res) {
    res.send({
      message: 'Server is available'
    })
  })
}
