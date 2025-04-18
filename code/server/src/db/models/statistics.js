"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    static associate({ User, Topic }) {
      this.belongsTo(User, {
        foreignKey: "user_id",
        as: "user",
      });
      this.belongsTo(Topic, {
        foreignKey: "topic_id"
      });
    }
  }

  Statistics.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      topic_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Statistics",
      tableName: "Statistics",
    }
  );

  return Statistics;
};
