import apiRoutes from './routes.js';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
const mongoClient = new MongoClient(process.env.DATABASE_URL)
export let db;
try {
    await mongoClient.connect();
    console.log(`Conexão estabelecida com o MongoDB`)
} catch (error) {
    console.log(error.message);
}

db = mongoClient.db();

app.use("/", apiRoutes)

let PORT = 5000
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`)
})