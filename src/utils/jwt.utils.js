require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return { type: 200, message: data };
  } catch (error) {
    return { type: 401, message: { message: 'Expired or invalid token' } };
  }
};

module.exports = {
  createToken,
  verifyToken,
};
