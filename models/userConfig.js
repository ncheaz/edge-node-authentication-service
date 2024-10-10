// models/user.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UserConfig', {
        option: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
