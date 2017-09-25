const express = require('express')
const logger = require('morgan')
const db = require('./db')

const api = require('./user/UserController')

const app = express()

app.use(logger('dev'))

if ((process.env.NODE_ENV = 'production')) {
  app.use(express.static('public'))
}

app.use('/api', api)

module.exports = app


