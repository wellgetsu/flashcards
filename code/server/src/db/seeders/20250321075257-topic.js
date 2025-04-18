"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Кино",
          image:
            "https://cdn.culture.ru/images/8c28f593-ceee-51db-8ac6-fe2a7b82e6c6",
        },
        {
          title: "Страны",
          image:
            "https://avatars.mds.yandex.net/i?id=be54885a0004e2b0f7cbd18a8fa714a7_l-5476551-images-thumbs&n=13",
        },
        {
          title: "Футбол",
          image:
            "https://image.winudf.com/v2/image/cnUucmFkdW5jZXYxMDAyLnZpZXdlcl9zY3JlZW5fNF8xNTExNzIxMzE5XzA4Ng/screen-4.jpg?fakeurl=1&type=.jpg",
        },
        {
          title: "Javascript",
          image:
            "https://i.pinimg.com/originals/7a/fb/04/7afb0491c91b2f9e9aac56667c3be677.jpg",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
