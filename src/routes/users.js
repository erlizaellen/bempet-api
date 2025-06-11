const express = require('express')
const router = express.Router()
const usersMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')

router.post(
    '/users',
    usersMiddleware.validateCreateUser,
    usersController.createUser
)

module.exports = router;