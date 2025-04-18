const { QnA } = require("../db/models");

class QnAService {
  //* Достать выбранную тему из БД по ID
  static async getTopicById(id) {
    return await Topic.findByPk(id);
  }
}

module.exports = TaskService;
