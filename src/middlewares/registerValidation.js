
import { newRegisterSchema } from '../schemas/registers.schema.js'
import { stripHtml } from "string-strip-html"

export const validateNewRegisterData = (req, res, next) => {
    let description = stripHtml(req.body.description.trim()).result
    let value = stripHtml(req.body.value.trim()).result
    let type = req.body.type
    let data = { description, value, type}
    const { error } = newRegisterSchema.validate(data)

    if (error == null) {
        next();
    } else {
        res.status(422).json({ error: "Dados inválidos" });
    }
}