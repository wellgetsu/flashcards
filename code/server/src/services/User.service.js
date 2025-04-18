const { User } = require('../../db/models');

class UserService {
  static getById(id) {
    return User.findByPk(id);
  }

  static async create({ name, email }) {
    if (!name || !email) {
      throw new Error('Name and email fields are required');
    }
    return User.create({ name, email });
  }
}

module.exports=UserService