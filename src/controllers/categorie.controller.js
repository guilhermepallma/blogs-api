const { addNewCategorie } = require('../services/categorie.service');

const createNewCategorie = async (request, response) => {
  const name = request.body;
  const { type, message } = await addNewCategorie(name);
  
  return response.status(type).json(message);
};

module.exports = {
  createNewCategorie,
};
