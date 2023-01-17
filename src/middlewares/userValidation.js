
import { userValidationSchema, addUserSchema } from '../schemas/users.schema.js'

export const validateUserData = (req, res, next) => {
    const { error } = userValidationSchema.validate(req.body)

    if(error == null) {
        next();
    } else {
        res.status(422).json({ error: "Dados inválidos" });
    }
}
export const validateNewUserData = (req, res, next) => {
    const { error } = addUserSchema.validate(req.body)

    if(error == null) {
        next();
    } else {
        res.status(422).json({ error: "Dados inválidos" });
    }
}