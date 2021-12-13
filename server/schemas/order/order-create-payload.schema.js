const Joi = require('joi');
const { OrderKey, OrderValidationRule } = require('../../common/enums/enums');

const orderCreatePayload = Joi.object({
  [OrderKey.NAME]: Joi.string().required(),
  [OrderKey.PEOPLE_COUNT]: Joi.number().positive().required(),
  [OrderKey.PHONE]: Joi.string()
    .length(OrderValidationRule.PHONE_MAX_LENGTH)
    .pattern(/^[0-9]+$/)
    .required(),
  [OrderKey.IS_LEGAL]: Joi.bool().required(),
});

module.exports = {
  orderCreatePayload,
};
