'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert sample data into UserConfigs table
    await queryInterface.bulkInsert('UserConfigs', [
      {
        user_id: 1,
        option: 'edge_node_publish_mode',
        value: 'public',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Delete the inserted data
    await queryInterface.bulkDelete('UserConfigs', {
      option: 'edge_node_publish_mode'
    }, {});
  }
};
