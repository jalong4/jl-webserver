const Users = require('../models/Users')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  register (req, res) {
    const newUser = req.body
    const email = newUser.email

    Users.getUserByAttribute({'email': email}, function (err, existingUser) {
      if (err) {
        return res.status(500).send({
          error: err.message
        })
      }

      if (existingUser) {
        return res.status(400).send({
          error: `Email ${email} is already registered.`
        })
      }

      Users.create(newUser, function (err, user) {
        if (err) {
          return res.status(500).send({
            error: err.message
          })
        }

        console.log(`User ${user.email} successfully registered...`)
        return res.json({
          user: user,
          token: jwtSignUser(user.toJSON())
        })
      })
    })
  },

  login (req, res) {
    const email = req.body.email
    Users.getUserByAttribute({'email': email}, function (err, user) {
      if (err) {
        return res.status(500).send({
          error: err.message
        })
      }

      if (!user) {
        return res.status(403).send({error: 'Invalid email or password'})
      }

      user.comparePassword(req.body.password, function (err, match) {
        if (err) {
          return res.status(500).send({
            error: err.message
          })
        }
        if (match) {
          return res.json({
            user: user,
            token: jwtSignUser(user.toJSON())
          })
        }
        res.status(403).send({error: 'Invalid email or password'})
      })
    })
  }
}
