const { initOrdersRouter } = require('./orders/orders');

const routeInits = [initOrdersRouter];

const initCustomRoutes = (server) => {
  routeInits.forEach((routeInit) => routeInit(server));
};

module.exports = {
  initCustomRoutes,
};
