const Users = require('../models/Users')

module.exports = {
  index (req, res) {
    const search = req.query.search

    if (search) {
      Users.search(search, function (err, projects) {
        if (err) {
          res.send({error: err.message})
        } else {
          res.json(projects)
        }
      })
    } else {
      Users.index(function (err, users) {
        if (err) {
          res.status(400).send({message: err.message})
        } else {
          res.json(users)
        }
      })
    }
  },

  get (req, res) {
    Users.get(req.params.id, function (err, user) {
      if (err) {
        res.status(400).send({message: err.message})
      } else {
        res.json(user)
      }
    })
  },

  delete (req, res) {
    Users.delete(req.params.id, function (err, doc) {
      if (err) {
        res.status(400).send({message: err.message})
      } else if (doc == null) {
        res.status(401).send({message: `User Id: ${req.params.id} does not exist.`})
      } else {
        res.send({message: `Deleted User Id ${req.params.id}`})
      }
    })
  },

  deleteByEmail (req, res) {
    Users.getUserByAttribute({'email': req.query.email}, function (err, deleteUser) {
      if (err) {
        res.status(400).send({message: err.message})
      } else if (!deleteUser) {
        res.status(401).send({message: `User for email ${req.query.email} not found`})
      } else {
        Users.delete(deleteUser.id, function (err, user) {
          if (err) {
            res.status(400).send({message: err.message})
          } else {
            res.send({message: `Deleted userId ${deleteUser.id}`})
          }
        })
      }
    })
  },

  getByEmail (req, res) {
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
