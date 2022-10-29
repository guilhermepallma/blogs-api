const authService = require('../services/authentication/auth.service');

const authLogin = async (request, response) => {
  const { email, password } = request.body;
  const { type, message } = await authService.validateUser({ email, password });
  
  return response.status(type).json(message);
};

module.exports = {
  authLogin,
};
