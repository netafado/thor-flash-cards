'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },

      deck_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'decks',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      front: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      back: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      repetitions: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      dificulty: {
        type: Sequelize.ENUM('EASY', 'MEDIUM', 'HARD'),
        allowNull: false,
        defaultValue: 'HARD',
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('cards');
  }
};
