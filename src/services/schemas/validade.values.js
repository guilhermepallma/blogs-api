const { loginSchema } = require('./validate.schemas');

const validateLogin = async (user) => {
  const { error, value } = await loginSchema.validate(user);
  console.log(error);
  if (error) {
    return { type: 400, message: { message: 'Some required fields are missing' } };
  }
  return { type: null, message: value };
};

module.exports = {
  validateLogin,
};
