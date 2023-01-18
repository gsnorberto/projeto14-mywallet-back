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
        
        res.status(200).json({ msg: "Tudo certo"})
        try {
            
        } catch (err) {
            
        }
    },
    // cashOutflow: async (req, res) => {
        

    //     try {
            
    //     } catch (err) {
            
    //     }
    // },
}