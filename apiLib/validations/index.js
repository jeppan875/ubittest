import Joi from "@hapi/joi";

export const articleSchema = Joi.object().keys({
  author: Joi.string().required(),
  authorImg: Joi.string().required(),
  title: Joi.string().required(),
  text: Joi.string().required(),
  imgurl: Joi.string().required()
});
