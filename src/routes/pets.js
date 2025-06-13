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
    '/pets',
    petsController.getPets,
)
router.delete(
    '/pets/:id',
    petsMiddleware.validateDeletePet,
    petsController.deletePet
)



module.exports = router;