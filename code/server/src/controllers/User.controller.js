const UserService = require('../services/User.service');

class UserController {
  static async getOneUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      res.json(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ text: 'Ошибка получения пользователя', error: error.message });
    }
  }

  static async createUser(req, res) {
    try { 
      const newUser = await UserService.create(req.body);
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ text: 'Ошибка создания пользователя', error: error.message });
    }
  }
}

module.exports=UserController