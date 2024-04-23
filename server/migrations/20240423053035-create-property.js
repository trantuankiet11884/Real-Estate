"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      listingType: {
        type: Sequelize.ENUM(["SALE", "RENTAL"]),
      },

      price: {
        type: Sequelize.FLOAT,
      },

      propertyTypeId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "PropertyTypes",
          key: "id",
        },
      },

      status: {
        type: Sequelize.ENUM(["PENDING", "CANCEL", "APPROVED"]),
        defaultValue: "PENDING",
      },

      isVailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      images: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      featureImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postedBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      bathRoom: {
        type: Sequelize.INTEGER,
      },
      bedRoom: {
        type: Sequelize.INTEGER,
      },

      propertySize: {
        type: Sequelize.FLOAT,
      },

      yearBuilt: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};
