const Joi = require("joi");

const createBlogValidator = Joi.object({
  title: Joi.string().max(64).required(),
  content: Joi.string().required(),
});

const updateBlogValidator = Joi.object({
  title: Joi.string().max(64),
  content: Joi.string(),
});

module.exports = { createBlogValidator, updateBlogValidator };
