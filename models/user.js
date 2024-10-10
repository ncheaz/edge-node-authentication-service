const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function(models) {
        User.hasMany(models.UserConfig, {
            foreignKey: 'user_id',
            as: 'configs'
        });
    };

    // Instance method to check if the provided password is correct
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.prototype.config = function() {
        return this.getConfigs();
    };

    User.beforeCreate(async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    });

    return User;
};
