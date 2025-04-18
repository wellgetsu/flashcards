'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('QnAs', 
        [
          {
            id: 1,
            title: "Какой фильм выиграл Оскар за лучший фильм в 2020 году?",
            answers: [
              { id: "1", text: "1917", guess: false },
              { id: "2", text: "Паразиты", guess: true },
              { id: "3", text: "Джокер", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 2,
            title: "Кто сыграл главную роль в фильме 'Титаник'?",
            answers: [
              { id: "1", text: "Брэд Питт", guess: false },
              { id: "2", text: "Леонардо ДиКаприо", guess: true },
              { id: "3", text: "Джонни Депп", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 3,
            title: "Какой режиссер снял фильм 'Психо'?",
            answers: [
              { id: "1", text: "Стэнли Кубрик", guess: false },
              { id: "2", text: "Альфред Хичкок", guess: true },
              { id: "3", text: "Фрэнсис Форд Коппола", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 4,
            title: "Какой фильм является первой частью трилогии 'Властелин колец'?",
            answers: [
              { id: "1", text: "Две крепости", guess: false },
              { id: "2", text: "Возвращение короля", guess: false },
              { id: "3", text: "Братство кольца", guess: true },
            ],
            topic_id: 1,
          },
          {
            id: 5,
            title: "Кто исполнил роль Джокера в фильме 2019 года?",
            answers: [
              { id: "1", text: "Хоакин Феникс", guess: true },
              { id: "2", text: "Джаред Лето", guess: false },
              { id: "3", text: "Кристофер Нолан", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 6,
            title: "Какой анимационный фильм студии Pixar вышел в 2003 году?",
            answers: [
              { id: "1", text: "В поисках Немо", guess: true },
              { id: "2", text: "История игрушек", guess: false },
              { id: "3", text: "Суперсемейка", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 7,
            title: "Какой фильм стал самым кассовым в истории на 2021 год?",
            answers: [
              { id: "1", text: "Мстители: Финал", guess: false },
              { id: "2", text: "Аватар", guess: true },
              { id: "3", text: "Титаник", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 8,
            title: "Кто является режиссером фильма 'Крестный отец'?",
            answers: [
              { id: "1", text: "Фрэнсис Форд Коппола", guess: true },
              { id: "2", text: "Мартин Скорсезе", guess: false },
              { id: "3", text: "Стивен Спилберг", guess: false },
            ],
            topic_id: 1,
          },
          {
            id: 9,
            title: "Какой фильм рассказывает о жизни и карьере певицы Уитни Хьюстон?",
            answers: [
              { id: "1", text: "Уитни", guess: false },
              { id: "2", text: "Светлая звезда", guess: false },
              { id: "3", text: "Я хочу танцевать с тобой", guess: true },
            ],
            topic_id: 1,
          },
          {
            id: 10,
            title:
              "Какой фильм стал первым в истории, получившим Оскар за лучший анимационный фильм?",
            answers: [
              { id: "1", text: "В поисках Немо", guess: false },
              { id: "2", text: "Шрек", guess: true },
              { id: "3", text: "История игрушек", guess: false },
            ],
            topic_id: 1,
          },
        ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('QnAs', null, {});
  }
};
