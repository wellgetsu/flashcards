const router = require('express').Router();
const TaskController = require('../controllers/Task.controller');

router
  //* Метод GET - получить все задачи (запустит функцию контроллер для получения всех задач)
  .get('/', TaskController.getAllTasks)

  //* Метод GET - получить задачу по ID (запустит функцию контроллер для получения задачи по id)
  .get('/:id', TaskController.getTaskById)

  //* Метод POST - создать задачу (запустит функцию контроллер для создания новой задачи)
  .post('/', TaskController.createTask)

  //* Метод PUT - обновить задачу (запустит функцию контроллер для обновления задачи по id)
  .put('/:id', TaskController.updateTask)

  //* Метод DELETE - удалить задачу (запустит функцию контроллер для удаления задачи по id)
  .delete('/:id', TaskController.deleteTask);

module.exports = router;
