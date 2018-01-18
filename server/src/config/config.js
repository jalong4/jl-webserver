module.exports = {
  port: process.env.PORT || 8081,
  dbUrl: process.env.DB_URL || 'mongodb://localhost/jl-db',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  password: {
    regex: process.env.PASSWORD_REGEX || '(?=.{6,})',
    errorMessage: process.env.PASSWORD_ERROR_MESSAGE || 'The password must be at least 6 characters.'
  }
}
