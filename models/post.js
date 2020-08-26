module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Posts", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        song_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        song_artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_inst: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_post: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    // connected this to users, not working
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Post
}

