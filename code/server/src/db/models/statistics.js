"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    static associate({ Topic, User }) {
      this.hasMany(Topic, { foreignKey: "topic_id" });
      this.hasMany(User, { foreignKey: "user_id" });
    }
  }
  Statistics.init(
    {
      skin: DataTypes.STRING,
      power: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Statistics",
    }
  );
  return Statistics;
};
