import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('emails', [
      { email: 'user1@example.com', createdAt: new Date() },
      { email: 'user2@example.com', createdAt: new Date() },
      { email: 'user3@example.com', createdAt: new Date() },
      { email: 'user4@example.com', createdAt: new Date() },
      { email: 'user5@example.com', createdAt: new Date() },
      { email: 'user6@example.com', createdAt: new Date() },
      { email: 'user7@example.com', createdAt: new Date() },
      { email: 'user8@example.com', createdAt: new Date() },
      { email: 'user9@example.com', createdAt: new Date() },
      { email: 'user10@example.com', createdAt: new Date() },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('emails', {});
  },
}