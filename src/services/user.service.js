const { validateUser } = require('./schemas/validade.values');
const { jwt } = require('../utils/index');
const { User } = require('../models');

const validadeNewUser = async ({ displayName, email, password, image }) => {
  const error = validateUser({ displayName, email, password, image });

  if (error.type) {
    return error;
  }

  const user = await User.findOne({ where: { email } });

  if (user) {
    return { type: 409, message: { message: 'User already registered' } };
  }
  
  const newUser = await User.create({ displayName, email, password, image });

  const token = jwt.createToken(newUser);

  return { type: 201, message: { token } };
};

module.exports = validadeNewUser;