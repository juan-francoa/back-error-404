const joi = require("joi");

const schema = joi.object({
    name: joi.string().required() 
        .min(3)
        .max(50)
        .messages({
            "any.required": "This field is required, please introduce it",
            "string.empty": "You missed the field name",
            "string.min": "You need three letteres minimum",
            "string.max" : "You need three letteres maximiun"
        }),
    continent: joi.string().required()
        .messages({
            "any.required": "This field is required, please introduce it",
            "string.empty": "You missed the field continent"
        }),
    photo: joi.string().required()
        .uri()
        .messages({
            "any.required": "This field is required, please introduce it",
            "string.empty": "You missed the field photo"
        }),
    population: joi.number().required()
        .messages({
            "any.required": "This field is required, please introduce it",
            "number.empty": "You missed the field population"
        }),
    userId: joi.any().required()
        .messages({
            "any.required": "This field is required, please introduce it",
            "string.empty": "You missed the field userId"
        })

})

module.exports = schema