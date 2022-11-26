const joi = require("joi");

const schema1 = joi.object({
    name: joi.string().required() 
        .min(3)
        .max(50)
        .messages({
            "any.required": "Name is required, please introduce it",
            "string.empty": "You missed the field name",
            "string.min": "You need three letteres minimum",
            "string.max" : "You need three letteres maximiun"
        }),
    photo: joi.any().required()
        .messages({
            "any.required": "Photo is required, please introduce it",
            "string.empty": "You missed the field photo"
        }),
    capacity: joi.number().required()
        .messages({
            "any.required": "Capacity is required, please introduce it",
            "string.empty": "You missed the field capacity"
        }),
    cityId: joi.any().required()
        .messages({
            "any.required": "cityId is required, please introduce it",
            "string.empty": "You missed the field cityId"
        }),
    userId: joi.any().required()
        .messages({
            "any.required": "userId is required, please introduce it",
            "string.empty": "You missed the field userId"
        })

})

module.exports = schema1

