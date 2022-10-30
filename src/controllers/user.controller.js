const { validadeNewUser, getUser, getUserById } = require('../services/user.service');

const createNewUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;
  const { type, message } = await validadeNewUser({ 
    displayName, email, password, image, 
  });
  
  return response.status(type).json(message);
};

const getAllUser = async (_request, response) => {
  const { type, message } = await getUser();

  return response.status(type).json(message);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await getUserById(id);

  return response.status(type).json(message);
};

module.exports = {
  createNewUser,
  getAllUser,
  getById,
};
