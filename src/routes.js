import express from 'express'
let router = express.Router()
import registerController from './controllers/registerController.js'
import userController from './controllers/userController.js'
import { validateNewUserData, validateUserData } from './middlewares/userValidation.js'
import { validateNewRegisterData } from './middlewares/registerValidation.js'
import { checkToken } from './middlewares/authentication.js'

// Login
router.post('/auth/login', validateUserData, userController.userValidate)

// Cadastro
router.post('/auth/sign-up', validateNewUserData, userController.addUser)

// Home
router.get('/registers', checkToken, registerController.getRegisters)

// Nova Entrada
router.post('/new-register', checkToken, validateNewRegisterData, registerController.newRegister)

// Nova Saída
//router.post('/nova-saida', validateNewRegisterData, registerController.cashOutflow)

// Deletar Registro
//router.delete('/cadastro', )

// Editar entrada
//router.put('/editar-entrada/:id', )

// Editar saída
//router.put('/editar-saida/:id', )

export default router