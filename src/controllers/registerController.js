import { db } from "../app.js"

import { stripHtml } from "string-strip-html"

export default {
    newRegister: async (req, res) => {
        let description = stripHtml(req.body.description.trim()).result
        let value = stripHtml(req.body.value.trim()).result
        let type = req.body.type // in or out
        let token = req.headers.authorization.split(" ")[1]

        try {
            // Search user
            let user = await db.collection("users").findOne({token})

            // If user is not found
            if(!user){
                return res.sendStatus(401) // unauthorized
            }

            let data = {value, description, type, userId: user._id, date: Date.now()}

            // Save register
            db.collection("registers").insertOne(data)
            res.sendStatus(200)
        } catch (err) {
            res.sendStatus(500)
        }
    },
    getRegisters: async (req, res) => {
        let token = req.headers.authorization.split(" ")[1]

        try {
            // Search user
            let user = await db.collection("users").findOne({token})

            // If user is not found
            if(!user){
                return res.sendStatus(401) // unauthorized
            }

            let registers = await db.collection('registers').find({ userId: user._id }).toArray()

            res.status(200).json(registers)
        } catch (err) {
            res.sendStatus(500)
        }
    },
}