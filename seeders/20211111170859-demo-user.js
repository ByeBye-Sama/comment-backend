"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userId_1 = await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Joaquin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const userId_2 = await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jhon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    return queryInterface.bulkInsert("comments", [
      {
        content: "testing seeders",
        userId: userId_1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "seeders working fine",
        userId: userId_2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "testing seeders test",
        userId: userId_2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "seeders working fine really",
        userId: userId_1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
