const authService = require('../services/authentication/auth.service');

const routerValidateToken = async (request, _response, next) => {
  const { authorization } = request.headers;
  authService.validateToken(authorization);

  next();
};

module.exports = routerValidateToken;