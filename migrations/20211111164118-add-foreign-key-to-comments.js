"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint("comments", {
      fields: ["userId"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
