const express = require('express')
const { getWord, getWords } = require('../controllers/getWord')
const router = express.Router()
router.route('/translate').get(getWord)
router.route('/word').get(getWords)

module.exports = router