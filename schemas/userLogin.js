const joi = require("joi");

const schemaLogin = joi.object({
    email: joi.string().required()
        .email({ minDomainSegments: 2 })
        .messages({
            "any.required": "email is required, please introduce it",
            "string.empty": "You missed the field email",
            "string.email" : "Email not valid"
        }),
    password: joi.string().required()
        .messages({
            "any.required": "password is required, please introduce it",
            "string.empty": "You missed the field password"
        })

})

module.exports = schemaLogin