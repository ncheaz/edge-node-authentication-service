'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert sample data into UserConfigs table
    await queryInterface.bulkInsert('user_wallets', [
      {
        user_id: 1,
        wallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        private_key: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
        blockchain: 'hardhat1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Delete the inserted data
    await queryInterface.bulkDelete('user_wallets', {
      wallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
    }, {});
  }
};
