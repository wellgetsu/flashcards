const TopicService = require("../services/Topic.service");
const isValidId = require("../utils/isValidId");
const formatResponse = require("../utils/formatResponse");

class TopicController {
  static async getAllTasks(req, res) {
    const tasks = await TopicService.getAll();
    try {

      if (tasks.length === 0) {
        return res.status(200).json(formatResponse(200, "No data"));
      }

      return res.status(200).json(formatResponse(200, "success", tasks));
    } catch ({ message }) {
      console.error("=====>>>>", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = TopicController;

