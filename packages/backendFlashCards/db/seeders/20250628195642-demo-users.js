'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface,) {
    await queryInterface.bulkInsert('Cards', [
      {
        id: '6269e37f-d7f4-4ecb-a3ce-d56532cf955f',
        deck_id: 'df6c091b-9e64-4e76-a0a1-ce19e220a621',
        front: 'What is the capital of France?',
        back: 'Paris',
        repetitions: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'b4e9ed7a-754a-460a-bd8c-dd5c301f5f96',
        deck_id: '4a7bedd0-aac5-4638-ab3c-125e6c242cca',
        front: 'What is the largest planet in our solar system?',
        back: 'Jupiter',
        repetitions: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '4a20976e-0002-420e-a291-ead42537af42',
        deck_id: '4a7bedd0-aac5-4638-ab3c-125e6c242cca',
        front: 'What is the capital of Japan?',
        back: 'Tokyo',
        repetitions: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {
      timestamps: false,
      validate: true,
      individualHooks: true,
      returning: true,
    });

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
    await queryInterface.bulkDelete('Decks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
