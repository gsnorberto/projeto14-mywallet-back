
import { newRegisterSchema } from '../schemas/registers.schema.js'

export const validateNewRegisterData = (req, res, next) => {
    const { error } = newRegisterSchema.validate(req.body)

    if(error == null) {
        next();
    } else {
        res.status(422).json({ error: "Dados inválidos" });
    }
}