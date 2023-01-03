const express = require('express')
const router = express.Router()

const {signup,signout} = require('../controllers/auth')
// respond with "hello world" when a GET request is made to the homepage
router.post('/signup',signup)
router.get('/signout',signout)

module.exports = router;