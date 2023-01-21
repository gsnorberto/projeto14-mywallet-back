import apiRoutes from './routes.js';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", apiRoutes)

let PORT = 5000
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`)
})