const joi = require("joi");

const schemaEdit = joi.object({
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
        })
})

module.exports = schemaEdit