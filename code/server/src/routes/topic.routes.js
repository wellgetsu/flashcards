const router = require("express").Router();
const TaskController = require("../controllers/Topic.controller");

router.get("/", TaskController.getAllTasks);

module.exports = router;
