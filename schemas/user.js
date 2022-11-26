const joi = require("joi");

const schema = joi.object({
    name: joi.string().required()
        .min(3)
        .max(50)
        .messages({
            "any.required": "name is required, please introduce it",
            "string.empty": "You missed the field name",
            "string.min": "You need three letteres minimum in name",
            "string.max": "You need three letteres maximiun in name"
        }),
    lastName: joi.string().required()
        .messages({
            "any.required": "lastName is required, please introduce it",
            "string.empty": "You missed the field lastName"
        }),
    photo: joi.string().required()
        .uri()
        .messages({
            "any.required": "photo is required, please introduce it",
            "string.empty": "You missed the field photo"
        }),
    age: joi.number().required()
        .messages({
            "any.required": "age is required, please introduce it",
            "string.empty": "You missed the field age"
        }),
    email: joi.string().required()
        .email({ minDomainSegments: 2 })
        .messages({
            "any.required": "email is required, please introduce it",
            "string.empty": "You missed the field email"
        }),
    password: joi.string().required()
        .messages({
            "any.required": "password is required, please introduce it",
            "string.empty": "You missed the field password"
        })

})

module.exports = schema