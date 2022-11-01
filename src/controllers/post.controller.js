const { getAllPost } = require('../services/post.service');

const getPost = async (request, response) => {
  const { type, message } = await getAllPost();
  
  return response.status(type).json(message);
};

module.exports = {
  getPost,
};
