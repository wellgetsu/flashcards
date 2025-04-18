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
      'Heros',
      [
        {
          skin: '😎',
          health: 1,
        },
        {
          skin: '🦊 ',
          health: 1,
        },
        {
          skin: '🐻',
          health: 1,
        },
        {
          skin: '🐯',
          health: 3,
        },
        {
          skin: '🦄',
          health: 1,
        },
        {
          skin: '😀',
          health: 1,
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
    await queryInterface.bulkDelete('Heros', null, {});
  },
};
