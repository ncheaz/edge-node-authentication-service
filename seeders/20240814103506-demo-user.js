'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const passwordHash = await bcrypt.hash('admin123', 10); // Hash the password
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    username: 'admin',
                    password: passwordHash,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', { username: 'admin' }, {});
    }
};
