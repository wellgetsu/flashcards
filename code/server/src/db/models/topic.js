"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ qnA }) {
      this.belongsTo(qnA, { foreignKey: "topic_id" });
    }
  }
  Topic.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
