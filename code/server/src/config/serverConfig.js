const express = require('express');
const path = require('path');
const morgan = require('morgan'); //* библиотека позволяющая выводить запросы в лог
const removeHTTPHeader = require('../middleware/removeHeader'); //* наша кастомная мидлварка

//NOTE: функция serverConfig, принимающая экземпляр приложения и возвращающая обученный экземпляр

//NOTE промежуточные обработчики, работающие глобально для всего приложения (системные мидлварки)
const serverConfig = (app) => {
  //* позволяет работать с телом запроса
  app.use(express.urlencoded({ extended: true }));

  //* парсит JSON
  app.use(express.json());

  //* логирует данные о запросах на сервер
  app.use(morgan('dev'));

  //* кастомная мидлварка для удаления HTTP заголовка
  app.use(removeHTTPHeader);

  //* настройка статики, папка public ассоциирована с маршрутом запроса
  app.use(
    '/static/images',
    express.static(path.resolve(__dirname, '..', 'public', 'images'))
  );
};

module.exports = serverConfig;
