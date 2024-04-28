module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Properties", "onwer", {
      type: Sequelize.UUID,
      references: {
        model: "Users",
        key: "id",
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Properties", "owner");
  },
};
