module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Meme", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            // defaultValue: 'anonymous'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        caption: {
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        }
    }, {
        tableName: 'memes'
    })
};