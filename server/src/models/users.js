
const bcrypt = require('bcrypt-nodejs')

const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
  email: {type: String, required: true, index: { unique: true }},
  password: {type: String, required: true},
  create_date: {type: Date, default: Date.now}
})

function hashPassword (user) {
  console.log('hash Password', user.password)
  const SALT_FACTOR = 8

  const salt = bcrypt.genSaltSync(SALT_FACTOR)
  const hash = bcrypt.hashSync(user.password, salt)
  console.log('hash', hash)
  return hash
}

usersSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) return next()
  user.password = hashPassword(user)
  next()
})

usersSchema.pre('update', function (next) {
  var user = this
  if (!user.isModified('password')) return next()
  user.password = hashPassword(user)
  next()
})

usersSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) return callback(err)
    callback(null, match)
  })
}

var Users = module.exports = mongoose.model('Users', usersSchema)

// Get Users
module.exports.getUsers = function (callback, limit) {
  Users.find(callback).limit(limit)
}

// Get UserById
module.exports.getUserById = function (id, callback) {
  Users.findById(id, callback)
}

// Delete UserById
module.exports.deleteUserById = function (id, callback) {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Users.remove({_id: id}, callback)
  } else {
    callback(new Error(`Invalid User Id: ${id}`), null)
  }
}

// Get getUserByAttribute
module.exports.getUserByAttribute = function (obj, callback) {
  console.log('getUserByAttribute: ', obj)
  Users.findOne(obj, callback)
}

// Create User
module.exports.createUser = function (user, callback) {
  Users.create(user, callback)
}
