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
      'Enemies',
      [
        {
          skin: '👾',
          power: 1,
        },
        {
          skin: '💀',
          power: 1,
        },
        {
          skin: '👹',
          power: 2,
        },
        {
          skin: '👻',
          power: 1,
        },
        {
          skin: '👿',
          power: 1,
        },
        {
          skin: '💩',
          power: 2,
        },
        {
          skin: '🤡',
          power: 2,
        },
        {
          skin: '🤺',
          power: 2,
        },
        {
          skin: '🧛',
          power: 2,
        },
        {
          skin: '🧟',
          power: 2,
        },
        {
          skin: '🎃',
          power: 2,
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
    await queryInterface.bulkDelete('Enemies', null, {});
  },
};
