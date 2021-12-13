const {
  orderCreatePayload: orderCreatePayloadSchema,
} = require('../../schemas/schemas');
const { ApiPath, HttpCode } = require('../../common/enums/enums');
const { validateSchema } = require('../../middlewares/middlewares');

const initOrdersRouter = (server) => {
  server.post(
    ApiPath.ORDERS,
    validateSchema(orderCreatePayloadSchema),
    (_req, res) => {
      return res.status(HttpCode.CREATED).json(HttpCode.CREATED);
    },
  );
};

module.exports = {
  initOrdersRouter,
};
