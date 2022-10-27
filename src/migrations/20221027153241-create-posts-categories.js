"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        reference: {
          model: 'blog_posts',
          key: 'id',
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        reference: {
          model: 'categories',
          key: 'id',
        }
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
