const express = require('express')
const router = express.Router()
const petsMiddleware = require('../middlewares/pets')
const petsController = require('../controllers/pets')

router.post(
    '/pets',
    petsMiddleware.validateCreatePet,
    petsController.createPet,
)

router.get(
    '/pets/:id',
    petsController.getPets,
)
router.delete(
    '/pets/:id',
    petsController.deletePet,
    petsMiddleware.validateDeletePet
)


module.exports = router;