const express = require('express')
const router = express.Router()
const petsMiddleware = require('../middlewares/pets')
const petsController = require('../controllers/pets')
const middlewareValidate = require('../middlewares/auth')

router.post(
    '/pets',
    middlewareValidate.validateToken,
    petsMiddleware.validateCreatePet,
    petsController.createPet,
)

router.get(
    '/pets',
    petsController.getPets,
)
router.get(
    '/pets/:id',
    petsController.getPetById,
)

router.put(
    '/pets/:id',
    petsController.updatePet
)

router.delete(
    '/pets/:id',
    petsMiddleware.validateDeletePet,
    petsController.deletePet
)



module.exports = router;