const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(logger('dev'))

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// Mongo DB 
mongoose.connect('mongodb://localhost/my_database')
const db = mongoose.connection

db.on('error', err => console.log(`Mongoose error: ${err}`))

db.on('open', () => console.log('Connected to db!'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/public/index.html')
})

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))