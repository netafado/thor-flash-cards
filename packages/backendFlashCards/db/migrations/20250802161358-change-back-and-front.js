'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('cards', 'front', {
      type: Sequelize.TEXT,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or any default value you want to set
    });

    await queryInterface.changeColumn('cards', 'back', {
      type: Sequelize.TEXT,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or any default value you want to set
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('cards', 'front', {
      type: Sequelize.STRING,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or any default value you want to set
    });

    await queryInterface.changeColumn('cards', 'back', {
      type: Sequelize.STRING,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or any default value you want to set
    });
  }
};
