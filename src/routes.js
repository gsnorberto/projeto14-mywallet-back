import express from 'express'
let router = express.Router()
import registerController from './controllers/registerController.js'
import userController from './controllers/userController.js'
import { validateNewUserData, validateUserData } from './middlewares/userValidation.js'
import { validateNewRegisterData, validateRegisterID } from './middlewares/registerValidation.js'
import { checkToken } from './middlewares/authentication.js'

// Login
router.post('/auth/login', validateUserData, userController.userValidate)

// Create a new user
router.post('/auth/sign-up', validateNewUserData, userController.addUser)

// Get registers
router.get('/registers', checkToken, registerController.getRegisters)
router.get('/register/:id', checkToken, registerController.getRegister)

// New register
router.post('/new-register', checkToken, validateNewRegisterData, registerController.newRegister)

// Delete register
router.delete('/register/:id', checkToken, validateRegisterID, registerController.deleteRegister)

// Edit register
router.put('/register/:id', checkToken, validateRegisterID, validateNewRegisterData, registerController.editRegister )

export default router