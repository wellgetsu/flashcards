'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Players',
      [
        {
          name: 'Biba',
          email: 'biba@mail.com',
          password: '123',
        },
        {
          name: 'Sergey',
          email: 's@mail.com',
          password: 's',
        },
        {
          name: 'Boba',
          email: 'boba@mail.com',
          password: 'boba',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Players', null, {});
  },
};
