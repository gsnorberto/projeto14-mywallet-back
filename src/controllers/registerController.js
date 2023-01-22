import db from "../config/database.js"
import { ObjectId } from "mongodb"

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
            await db.collection("registers").insertOne(data)
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
    editRegister: async (req, res) => {
        let registerID = stripHtml(req.params.id.trim()).result
        let token = req.headers.authorization.split(" ")[1]
        let description = stripHtml(req.body.description.trim()).result
        let value = stripHtml(req.body.value.trim()).result

        try {
            
        } catch (err) {
            res.sendStatus(500)
        }
    },
    deleteRegister: async (req, res) => {
        let registerID = stripHtml(req.params.id.trim()).result
        let token = req.headers.authorization.split(" ")[1]

        try {
            // Search user
            let user = await db.collection("users").findOne({token})

            // If user is not found
            if(!user){
                return res.sendStatus(401) // unauthorized
            }

            // search register and check if user owns it
            let register = await db.collection("registers").findOne({
                $and:[
                    {_id: ObjectId(registerID)},
                    {userId: user._id}
                ]
            })
            if(!register){
                return res.sendStatus(400)
            }

            await db.collection('registers').deleteOne({ _id: ObjectId(registerID) })
            res.sendStatus(200)
        } catch (err) {
            res.sendStatus(500)
        }
    },
}