const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost', { useMongoClient: true })

const db = mongoose.connection

db.on('error', err => console.log(err))

db.on('connect', () => console.log('Mongoose connected to DB!'))

module.exports = db