module.exports = {
  port: process.env.PORT || 8081,
  mongoDbUriLocal: process.env.MONGODB_URI || 'mongodb://localhost/jl-db',
  mongoDbUri: process.env.MONGODB_URI || 'mongodb://admin:Admin0708@ds239117.mlab.com:39117/jl-db',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  password: {
    regex: process.env.PASSWORD_REGEX || '(?=.{6,})',
    errorMessage: process.env.PASSWORD_ERROR_MESSAGE || 'The password must be at least 6 characters.'
  }
}
