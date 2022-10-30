const { Category } = require('../models');
const { validateCategorie } = require('./schemas/validade.values');

const addNewCategorie = async ({ name }) => {
  const error = validateCategorie({ name });

  if (error.type) {
    return error;
  }

  const newCategorie = await Category.create({ name });
  return { type: 201, message: newCategorie };
};

module.exports = {
  addNewCategorie,
};