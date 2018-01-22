const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const UsersController = require('./controllers/UsersController')
const MediaController = require('./controllers/MediaController')
const ProjectsController = require('./controllers/ProjectsController')
// const path = require('path')

module.exports = (app) => {
  app.post('/api/login', AuthController.login)
  app.post('/api/register', AuthControllerPolicy.register, AuthController.register)

  app.get('/api/users', UsersController.getUsers)
  app.get('/api/user/:id', UsersController.getUserById)
  app.delete('/api/user/:id', UsersController.deleteUserById)
  app.delete('/api/user', UsersController.deleteUserByEmail)
  app.get('/api/user', UsersController.getUserByEmail)

  app.get('/api/media', MediaController.index)
  app.get('/api/projects', ProjectsController.index)

  app.get('/status', function (req, res) {
    res.send({message: 'Server is available'})
  })
}
