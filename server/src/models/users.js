const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  create_date: {type: Date, default: Date.now}
})

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
  console.log('Deleting userId: ', id)
  Users.remove({_id: id}, callback)
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
