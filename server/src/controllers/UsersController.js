const Users = require('../models/Users')

module.exports = {
  getUsers (req, res) {
    Users.getUsers(function (err, users) {
      if (err) {
        res.status(400).send({message: err.message})
      } else {
        res.json(users)
      }
    })
  },

  getUserById (req, res) {
    Users.getUserById(req.params.id, function (err, user) {
      if (err) {
        res.status(400).send({message: err.message})
      } else {
        res.json(user)
      }
    })
  },

  deleteUserById (req, res) {
    Users.deleteUserById(req.params.id, function (err, response) {
      const statusCode = JSON.parse(response).n
      if (err) {
        res.status(400).send({message: err.message})
      } else if (statusCode === 0) {
        res.status(401).send({message: `User Id: ${req.params.id} does not exist.`})
      } else {
        res.send({message: `Deleted userId ${req.params.id}`})
      }
    })
  },

  deleteUserByEmail (req, res) {
    Users.getUserByAttribute({'email': req.query.email}, function (err, deleteUser) {
      if (err) {
        res.status(400).send({message: err.message})
      } else if (!deleteUser) {
        res.status(401).send({message: `User for email ${req.query.email} not found`})
      } else {
        Users.deleteUserById(deleteUser.id, function (err, user) {
          if (err) {
            res.status(400).send({message: err.message})
          } else {
            res.send({message: `Deleted userId ${deleteUser.id}`})
          }
        })
      }
    })
  },

  getUserByEmail (req, res) {
    const email = req.query.email
    Users.getUserByAttribute({'email': email}, function (err, user) {
      if (err) {
        res.status(400).send({message: err.message})
      } else if (!user) {
        res.status(401).send({message: `Email ${email} not found`})
      } else {
        res.send({user: user, message: `Found user ${email}`})
      }
    })
  }
}
