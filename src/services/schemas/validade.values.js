const { loginSchema, userSchema, categorieSchema } = require('./validate.schemas');

const validateLogin = (user) => {
  const { error, value } = loginSchema.validate(user);
  if (error) {
    return { type: 400, message: { message: 'Some required fields are missing' } };
  }
  return { type: null, message: value };
};

const validateUser = (newUser) => {
  const { error, value } = userSchema.validate(newUser);
  if (error) {
    return { type: 400, message: { message: error.details[0].message } };
  }
  return { type: null, message: value };
};

const validateCategorie = (name) => {
  const { error, value } = categorieSchema.validate(name);
  if (error) {
    return { type: 400, message: { message: error.details[0].message } };
  }
  return { type: null, message: value };
};

module.exports = {
  validateLogin,
  validateUser,
  validateCategorie,
};
