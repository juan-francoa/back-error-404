const joi = require("joi");

const schemaItinerary = joi.object({
    userId: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'City ID' is required, please enter it.",
            "string.empty": "The field 'City ID' mustn't be empty, please fill it.",
            "string.base": "The field 'City ID' must be a string.",
        }),
    name: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'Name' is required, please enter it.",
            "string.empty": "The field 'Name' is required, please enter it.",
            "string.base": "Enter the Name of the itinerary, please.",
        }),
    photo:
        joi.string().required()
            .uri()
            .messages({
                "any.required": "The field 'Photo' is required, please complete it.",
                "string.uri": "The field 'Photo' must be an url.",
                "any.required": "The field 'Photo' is required, please enter it.",
                "string.base": "Enter the Photo of the itinerary, please.",
                'string.empty': "The field 'Photo' is required, please enter it."
            }),
    price: joi
        .number()
        .required()
        .messages({
            "any.required": "The field 'Price' is required, please enter it.",
            "number.base": "The field 'Price' must be a number.",
            "number.empty": "The field 'Price' is required, please enter it.",
        }),
    duration: joi
        .number()
        .required()
        .messages({
            "any.required": "The field 'Duration' is required, please enter it.",
            "number.base": "The field 'Duration' must be a number.",
            "number.empty": "The field 'Duration' is required, please enter it.",
        }),
    descripcion: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'Description' is required, please enter it.",
            "string.empty": "The field 'Description' mustn't be empty, please fill it.",
            "string.base": "The field 'Description' must be a string.",
        }),
    cityId: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'City ID' is required, please enter it.",
            "string.empty": "The field 'City ID' mustn't be empty, please fill it.",
            "string.base": "The field 'City ID' must be a string.",
        }),
});

module.exports = schemaItinerary;