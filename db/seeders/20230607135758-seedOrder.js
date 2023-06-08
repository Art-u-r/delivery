/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          img: 'https://klike.net/uploads/posts/2019-06/1559545617_2.jpg',
          name: 'Burger',
          price: 200,
          discount: 15,
          destination: '55.811771,37.639303',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },
        {
          img: 'https://klike.net/uploads/posts/2019-06/medium/1559545523_3.jpg',
          name: 'Pizza',
          price: 700,
          discount: 15,
          destination: '55.669006,37.515218',
          customerId: 2,
          courierId: 1,
          isActive: false,
        },
        {
          img: 'https://klike.net/uploads/posts/2019-06/medium/1559545632_4.jpg',
          name: 'Sushi set',
          price: 500,
          discount: 15,
          destination: '55.669006,37.515218',
          customerId: 2,
          courierId: 1,
          isActive: false,
        },
        {
          img: 'https://klike.net/uploads/posts/2019-06/medium/1559545577_5.jpg',
          name: 'Wok',
          price: 400,
          discount: 15,
          destination: '55.811771,37.639303',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },
        {
          img: 'https://klike.net/uploads/posts/2019-06/medium/1559545664_17.jpg',
          name: 'Candies',
          price: 400,
          discount: 15,
          destination: '55.811771,37.639303',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },
        {
          img: 'https://klike.net/uploads/posts/2019-06/medium/1559545722_19.jpg',
          name: 'Breakfast',
          price: 1000,
          discount: 15,
          destination: '55.669006,37.515218',
          customerId: 2,
          courierId: 1,
          isActive: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
