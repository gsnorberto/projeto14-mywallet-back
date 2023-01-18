import { db } from "../app.js"

import { stripHtml } from "string-strip-html"

export default {
    addUser: async (req, res) => {
        let name = stripHtml(req.body.name.trim()).result
        let email = stripHtml(req.body.email.trim()).result
        let password = stripHtml(req.body.password.trim()).result
        let data = {name, email, password}

        try {
            let user = await db.collection('users').findOne({ email })

            // if the email address already exists in the DB
            if(user) return res.sendStatus(409)

            db.collection('users').insertOne(data)
            await res.sendStatus(200) // registration has been successful
        } catch (err) {
            return res.sendStatus(500)
        }
    },
    userValidate: async (req, res) => {
        try {
            
        } catch (err) {
            
        }
    },
}