import Joi from "joi";

export const newRegisterSchema = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required(),
})