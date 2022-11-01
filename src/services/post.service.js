const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const getAllPost = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
    return { type: 200, message: getAllPost };
};

const getById = async (id) => {
  const validate = await BlogPost.findByPk(id);
  if (!validate) {
    return { type: 404, message: { message: 'Post does not exist' } };
  }

  const getPostById = await BlogPost.findOne({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  return { type: 200, message: getPostById };
};

module.exports = {
  getAll,
  getById,
};