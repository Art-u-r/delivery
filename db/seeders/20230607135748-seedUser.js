/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: '123@mail.ru',
          password: '123',
          isCourier: false,
        },
        {
          name: 'Alex',
          email: '321@mail.ru',
          password: '123',
          isCourier: false,
        },
        {
          name: 'Cima',
          email: 'abc@mail.ru',
          password: '123',
          isCourier: true,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
