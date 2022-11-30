const joi = require('joi');

  const schemaReaction = joi.object({
      itineraryId: joi
          .string()
          .required()
          .messages({
              "string.empty": "itinerary ID is required.",
              "any.required": "itinerary ID is required."
          }),
      name: joi
          .string()
          .required()
          .messages({
              "any.required": "The field 'name' is required, please enter it.",
              "string.empty": "The field 'name' is required, please enter it.",
              "string.base": "Enter the name of the show, please.",
          }),
      icon: joi
          .string()
          .uri()
          .required()
          .messages({
              "any.required": "The field icon is required, please enter it.",
              "string.empty": "The field icon mustn't be empty, please fill it.",
              "string.base": "The field icon must be a string.",
          }),
      iconBack: joi
          .string()
          .uri()
          .required()
          .messages({
              "any.required": "The field iconBack is required, please complete it.",
              "string.uri": "The field iconBack must be an url.",
              "any.required": "The field iconBack is required, please enter it.",
              "string.base": "Enter the photo of the show, please.",
              'string.empty': "The field iconBack is required, please enter it."
          })
  });
  
  module.exports = schemaReaction;