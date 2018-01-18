const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const UsersController = require('./controllers/UsersController')
const MediaController = require('./controllers/MediaController')
const ProjectsController = require('./controllers/ProjectsController')

module.exports = (app) => {
  app.post('/login', AuthController.login)
  app.post('/register', AuthControllerPolicy.register, AuthController.register)

  app.get('/users', UsersController.getUsers)
  app.get('/user/:id', UsersController.getUserById)
  app.delete('/user/:id', UsersController.deleteUserById)
  app.delete('/user', UsersController.deleteUserByEmail)
  app.get('/user', UsersController.getUserByEmail)

  app.get('/media', MediaController.getMedia)
  app.get('/projects', ProjectsController.getProjects)

  app.get('/status', function (req, res) {
    res.send({message: 'Server is available'})
  })
}
