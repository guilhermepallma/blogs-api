const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const categories = await BlogPost.findAll({
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
    return { type: 200, message: categories };
};

module.exports = {
  getAllPost,
};