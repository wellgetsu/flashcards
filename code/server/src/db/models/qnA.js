"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QnA extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, {
        foreignKey: "topic_id"
      });
    }
  }

  QnA.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Topics",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "QnA",
      tableName: "QnAs",
    }
  );

  return QnA;
};
