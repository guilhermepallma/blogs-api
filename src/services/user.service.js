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

const getUser = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return { type: 200, message: user };
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) {
    return { type: 404, message: { message: 'User does not exist' } };
  }
  return { type: 200, message: user };
};

module.exports = {
  validadeNewUser,
  getUser,
  getUserById,
};