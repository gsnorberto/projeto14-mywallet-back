import Joi from "joi";

export const newRegisterSchema = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required(),
    type: Joi.string().required().valid("in", "out"),
})

export const validateRegisterIDSchema = Joi.object({
    id: Joi.string().required()
})