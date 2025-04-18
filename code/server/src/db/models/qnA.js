"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QnA extends Model {
    static associate({ Topic }) {
      this.hasMany(Topic, { foreignKey: "topic_id" });
    }
  }
  QnA.init(
    {
      topic_id: DataTypes.INTEGER,
      question: DataTypes.INTEGER,
      answer: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "QnA",
    }
  );
  return QnA;
};

// this.hasMany(User, { foreignKey: "user_id" });
// this.hasMany(Statistics, { foreignKey: "statistics_id" });