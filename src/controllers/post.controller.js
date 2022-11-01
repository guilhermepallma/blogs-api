const { getAll, getById } = require('../services/post.service');

const getAllPost = async (_request, response) => {
  const { type, message } = await getAll();
  
  return response.status(type).json(message);
};

const getPostById = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await getById(id);
  
  return response.status(type).json(message);
};

module.exports = {
  getAllPost,
  getPostById,
};
