const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const UsersController = require('./controllers/UsersController')
const MediaController = require('./controllers/MediaController')
const ProjectsController = require('./controllers/ProjectsController')
// const path = require('path')

module.exports = (app) => {
  app.post('/api/login', AuthController.login)
  app.post('/api/register', AuthControllerPolicy.register, AuthController.register)

  app.get('/api/users', UsersController.index)
  app.get('/api/user/:id', UsersController.get)
  app.delete('/api/user/:id', UsersController.delete)
  app.delete('/api/user', UsersController.deleteByEmail)
  app.get('/api/user', UsersController.getByEmail)

  app.get('/api/media', MediaController.index)
  app.post('/api/media', MediaController.post)
  app.get('/api/media/:id', MediaController.get)
  app.delete('/api/media/:id', MediaController.delete)

  app.get('/api/projects', ProjectsController.index)
  app.get('/api/projects', ProjectsController.index)
  app.post('/api/projects', ProjectsController.post)
  app.get('/api/project/:id', ProjectsController.get)
  app.delete('/api/project/:id', ProjectsController.delete)

  app.get('/api/status', function (req, res) {
    res.send({message: 'Server is available'})
  })
}
