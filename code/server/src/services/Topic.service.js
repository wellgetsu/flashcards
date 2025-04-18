const { Topic } = require("../db/models");

class TopicService {
  static async getAll() {
    return await Topic.findAll();
  }

  static async getById(id) {
    return await Topic.findByPk(id);
  }

  static async create(data) {
    return await Topic.create(data);
  }

  static async update(id, data) {
    const topic = await this.getById(id);
    if (topic) {
      topic.title = data.title;
      topic.body = data.body;
      await topic.save();
    }
    return topic;
  }

  static async delete(id) {
    const topic = await this.getById(id);
    if (topic) {
      await topic.destroy();
    }
    return topic;
  }
}

module.exports = TopicService;

