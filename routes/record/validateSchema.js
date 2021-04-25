const Joi = require("joi");

exports.retrieve = {
  body: Joi.object({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    minCount: Joi.number().required(),
    maxCount: Joi.number().required(),
  }),
};
