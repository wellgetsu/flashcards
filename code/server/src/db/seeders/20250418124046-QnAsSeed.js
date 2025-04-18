"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "QnAs",
      [
        {
          id: 1,
          question: "Какой фильм выиграл Оскар за лучший фильм в 2020 году?",
          answer: "Паразиты",
          topic_id: 1,
        },
        {
          id: 2,
          question: "Кто сыграл главную роль в фильме 'Титаник'?",
          answer: "Леонардо ДиКаприо",
          topic_id: 1,
        },
        {
          id: 3,
          question: "Какой режиссер снял фильм 'Психо'?",
          answer: "Альфред Хичкок",
          topic_id: 1,
        },
        {
          id: 4,
          question:
            "Какой фильм является первой частью трилогии 'Властелин колец'?",
          answer: "Братство кольца",
          topic_id: 1,
        },
        {
          id: 5,
          question: "Кто исполнил роль Джокера в фильме 2019 года?",
          answer: "Хоакин Феникс",
          topic_id: 1,
        },
        {
          id: 6,
          question: "Какой анимационный фильм студии Pixar вышел в 2003 году?",
          answer: "В поисках Немо",
          topic_id: 1,
        },
        {
          id: 7,
          question: "Какой фильм стал самым кассовым в истории на 2021 год?",
          answer: "Аватар",
          topic_id: 1,
        },
        {
          id: 8,
          question: "Кто является режиссером фильма 'Крестный отец'?",
          answer: "Фрэнсис Форд Коппола",
          topic_id: 1,
        },
        {
          id: 9,
          question:
            "Какой фильм рассказывает о жизни и карьере певицы Уитни Хьюстон?",
          answer: "Я хочу танцевать с тобой",
          topic_id: 1,
        },
        {
          id: 10,
          question:
            "Какой фильм стал первым в истории, получившим Оскар за лучший анимационный фильм?",
          answer: "Шрек",
          topic_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("QnAs", null, {});
  },
};
