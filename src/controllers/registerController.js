import { db } from "../app.js"

import { stripHtml } from "string-strip-html"

export default {
    newRegister: async (req, res) => {
        let value = stripHtml(req.body.value.trim()).result
        let description = stripHtml(req.body.description.trim()).result
        let type = 'in';
        let data = {value, description}

        try {
            
        } catch (err) {
            
        }
    },
    getRegisters: async (req, res) => {
        try {
            let registers = await db.collection('registers').find().toArray()
            res.status(200).json(registers)
        } catch (err) {
            res.sendStatus(500)
        }
    },
    // cashOutflow: async (req, res) => {
        

    //     try {
            
    //     } catch (err) {
            
    //     }
    // },
}