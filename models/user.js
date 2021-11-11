"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  User.associate = function (models) {
    User.hasMany(models.comment);
  };
  return User;
};
