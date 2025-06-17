const express = require('express')
const router = express.Router()
const usersMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')

router.post(
    '/users',
    usersMiddleware.validateCreateUser,
    usersController.createUser
)
router.get(
    '/users',
    usersController.getUsers
)
router.get(
    '/users/:id',
    usersController.getUserById);
router.delete(
    '/users/:id',
    usersController.deleteUser
)
router.put(
    '/users/:id',
    usersController.updateUser
)

module.exports = router;
