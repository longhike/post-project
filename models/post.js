module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Posts", {
        username: {
            type: DataTypes.STRING,
        },
        user_post: {
            type: DataTypes.STRING,
        }
    })
    return Post
}

