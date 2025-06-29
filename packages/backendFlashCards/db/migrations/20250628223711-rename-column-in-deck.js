'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.renameColumn('decks', 'oldColumnName', 'newColumnName');
     */
    await queryInterface.addColumn('decks', 'title', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.renameColumn('decks', 'newColumnName', 'oldColumnName');
     */
    await queryInterface.removeColumn('decks', 'title');
  }
};
