const { validateLogin } = require('../schemas/validade.values');
const { jwt } = require('../../utils/jwt.utils');
const { User } = require('../../models');

const validateUser = async ({ email, password }) => {
  const error = await validateLogin({ email, password });

  if (error.type) {
    return error;
  }

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 400, message: { message: 'Invalid fields' } };
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwt.createToken(userWithoutPassword);

  return { type: 200, message: { token } };
};

const validateToken = (token) => {
  if (!token) {
    return { message: { message: 'Token not found' } };
    }
    const user = jwt.verifyToken(token);
    
    return user;
};  

module.exports = { validateUser, validateToken };
