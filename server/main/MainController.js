const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.json({ mssg: 'hello api!' })
})

module.exports = router