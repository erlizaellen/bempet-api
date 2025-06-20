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
    middlewareValidate.validateToken,
    petsController.getPets,
)
router.get(
    '/pets/:id',
    middlewareValidate.validateToken,
    petsController.getPetById,
)

router.get(
    '/userpets',
    middlewareValidate.validateToken,
    petsController.getPetsByUserId
)

router.put(
    '/pets/:id',
    middlewareValidate.validateToken,
    petsMiddleware.validatePutPet,
    petsController.updatePet
)

router.delete(
    '/pets/:id',
    middlewareValidate.validateToken,
    petsMiddleware.validateDeletePet,
    petsController.deletePet
)



module.exports = router;