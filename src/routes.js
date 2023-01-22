import express from 'express'
let router = express.Router()
import registerController from './controllers/registerController.js'
import userController from './controllers/userController.js'
import { validateNewUserData, validateUserData } from './middlewares/userValidation.js'
import { validateNewRegisterData, validateRegisterID } from './middlewares/registerValidation.js'
import { checkToken } from './middlewares/authentication.js'

// Login
router.post('/auth/login', validateUserData, userController.userValidate)

// Cadastro
router.post('/auth/sign-up', validateNewUserData, userController.addUser)

// Home
router.get('/registers', checkToken, registerController.getRegisters)

// Nova Entrada
router.post('/new-register', checkToken, validateNewRegisterData, registerController.newRegister)

// Deletar Registro
router.delete('/register/:id', checkToken, validateRegisterID, registerController.deleteRegister)

// Editar registro
router.put('/register/:id', checkToken, validateRegisterID, validateNewRegisterData, registerController.editRegister )

export default router