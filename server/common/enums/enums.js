const api = require('./api/api');
const http = require('./http/http');
const order = require('./order/order');

module.exports = {
  ...api,
  ...http,
  ...order,
};
