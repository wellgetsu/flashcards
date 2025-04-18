const { Task } = require('../db/models');

//NOTE Почему не использовать `try/catch` в сервисах:

//? 1. Повышение уровня абстракции: Контроллеры отвечают за обработку конкретных HTTP-запросов и формирование ответов. Они должны принимать решения о том, как обрабатывать ошибки на высоком уровне. Сервисы же предназначены для более низкоуровневой обработки, такой как работа с базой данных. Они могут просто выполнять операции и вернуться к вызывающему коду с данными или `null`, если операция не удалась.

//? 2. Упрощение логики сервисов: Если вы добавите `try/catch` в каждый метод сервиса, это приведет к избыточности и усложнению кода.

//? 3. Разделение обязанностей: Наличие единой точки для обработки ошибок (например, в контроллерах) упрощает поддержку и тестирование кода. Если ошибка возникает в сервисе, контроллер сможет адекватно на нее отреагировать, в то время как сервисы остаются чистыми и ответственны только за логику работы с данными.

//? 4. Ошибки, обрабатываемые на уровне приложения: В некоторых случаях, когда вы работаете с ORM (Object-Relational Mapping), такие как Sequelize, ошибки могут генерироваться на уровне баз данных (например, ошибки валидации), и ORM может бросать соответствующие исключения. Это означает, что лучше всего обрабатывать их в контроллере для предоставления адекватного ответа клиенту, иначе мы увидим сложно читаемые ошибки на фронте.

class TaskService {
  //* Получить все задачи
  static async getAll() {
    return await Task.findAll();
  }

  //* Найти задачу по ID
  static async getById(id) {
    return await Task.findByPk(id);
  }

  //* Создать новую задачу
  static async create(data) {
    return await Task.create(data);
  }

  //* Обновить задачу по ID
  static async update(id, data) {
    const task = await this.getById(id);
    if (task) {
      task.title = data.title;
      task.body = data.body;
      await task.save();
    }
    return task; //* Возвращаем обновлённый объект или null
  }

  //* Удалить задачу по ID
  static async delete(id) {
    const task = await this.getById(id);
    if (task) {
      await task.destroy();
    }
    return task; //* Возвращаем удалённый объект или null
  }
}

module.exports = TaskService;
