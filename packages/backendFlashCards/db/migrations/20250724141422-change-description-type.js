'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // update the description column type to TEXT
    await queryInterface.changeColumn('decks', 'description', {
      type: Sequelize.TEXT,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or any default value you want to set
    });
  },

  async down (queryInterface, Sequelize) {
    // revert the description column type back to STRING
    await queryInterface.changeColumn('decks', 'description', {
      type: Sequelize.STRING,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or any default value you want to set
    });
  }
};
