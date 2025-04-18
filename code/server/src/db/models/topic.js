"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ QnA, Statistics }) {
      this.hasMany(QnA, {
        foreignKey: "topic_id"
      });
      this.hasMany(Statistics, {
        foreignKey: "topic_id"
      });
    }
  }

  Topic.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Topic",
      tableName: "Topics",
    }
  );

  return Topic;
};
