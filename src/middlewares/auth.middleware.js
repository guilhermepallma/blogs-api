const { jwt } = require('../utils');

const routerValidateToken = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Token not found' }); 
  }

  const verifySing = jwt.verifyToken(authorization, process.env.JWT_SECRET);

  if (verifySing.type === 401) {
    return response.status(verifySing.type).json(verifySing.message);
  }
  next();
};

module.exports = {
  routerValidateToken,
};