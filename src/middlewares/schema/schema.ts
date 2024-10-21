import * as Joi from 'joi';

const loginFields = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const sendEmail = Joi.object({
  email: Joi.string().email().required(),
  message: Joi.string().min(5).required(),
});

export default {
  loginFields,
  sendEmail,
};
