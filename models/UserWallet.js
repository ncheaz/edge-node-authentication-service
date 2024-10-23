// models/user.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'UserWallet',
        {
            wallet: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            private_key: {
                type: DataTypes.STRING,
                allowNull: false
            },
            blockchain: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'user_wallets' // Specify the table name here
        }
    );
};
