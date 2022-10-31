const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
      as: 'categories',
    }),

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
      as: 'posts',
    });
  }
  return PostCategory;
};  

module.exports = PostCategoryModel;