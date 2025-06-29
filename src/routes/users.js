const express = require('express')
const router = express.Router()
const usersMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')
const authMiddleware = require('../middlewares/auth')

router.post(
    '/users',
    usersMiddleware.validateCreateUser,
    usersController.createUser
)
router.get(
    '/users',
    authMiddleware.validateToken,
    usersController.getUsers
)
router.get(
    '/userprofile',
    authMiddleware.validateToken,
    usersController.getUserById)


router.delete(
    '/users/:id',
    authMiddleware.validateToken,
    usersController.deleteUser
)
router.put(
    '/users/:id',
    authMiddleware.validateToken,
    usersController.updateUser
)

module.exports = router;
