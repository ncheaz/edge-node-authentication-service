'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Insert example records into the userConfigs table
        await queryInterface.bulkInsert('UserConfigs', [
            {
                user_id: 1,
                option: 'edge_node_backend_endpoint',
                value: 'http://localhost:3002',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'kmining_endpoint',
                value: 'http://localhost:5001',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'drag_endpoint',
                value: 'http://localhost:5002',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'publish_service_endpoint',
                value: 'internal',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'kmining_pipeline_id',
                value: 'simple_json_to_jsonld',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'edit_is_turned_on',
                value: 'false',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'preview_is_turned_on',
                value: 'false',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'run_time_node_endpoint',
                value: 'https://placeholder.origin-trail.network',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'run_time_node_port',
                value: '8900',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                option: 'edge_node_environment',
                value: 'mainnet',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        // Optionally, you can define how to revert the seed
        await queryInterface.bulkDelete('UserConfigs', null, {});
    }
};
