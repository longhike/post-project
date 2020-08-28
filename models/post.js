module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Posts", {

        // AMEND HERE
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_comment: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    // connected this to users
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Post
}

