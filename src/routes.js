import express from 'express'
let router = express.Router()
import registerController from './controllers/registerController.js'
import userController from './controllers/userController.js'
import { validateNewUserData, validateUserData } from './middlewares/userValidation.js'
import { validateNewRegisterData } from './middlewares/registerValidation.js'

// Login
router.post('/', validateUserData, userController.userValidate)

// Cadastro
router.post('/cadastro', validateNewUserData, userController.addUser)

// Home
router.get('/home', registerController.getRegisters)

// Nova Entrada
router.post('/nova-entrada', validateNewRegisterData, registerController.cashInflow)

// Nova Saída
router.post('/nova-saida', validateNewRegisterData, registerController.cashOutflow)

// Deletar Registro
//router.delete('/cadastro', )

// Editar entrada
//router.put('/editar-entrada/:id', )

// Editar saída
//router.put('/editar-saida/:id', )

export default router