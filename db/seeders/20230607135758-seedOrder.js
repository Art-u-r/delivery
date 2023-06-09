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
          isActive: true,
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
        {
          img: 'https://cs11.pikabu.ru/post_img/big/2020/03/29/2/1585445674130218887.jpg',
          name: 'Пельмени',
          price: 1000,
          discount: 35,
          destination: '55.739440,37.592617',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://w.forfun.com/fetch/c9/c97c6c24542a8a178951f49955342848.jpeg',
          name: 'Макаруни',
          price: 700,
          discount: 25,
          destination: '55.770199,37.602993',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://photoretouch.ru/wp-content/uploads/2013/03/semka-edyi.jpg',
          name: 'Круасан',
          price: 100,
          discount: 5,
          destination: '55.743303,37.642714',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://attuale.ru/wp-content/uploads/2018/11/2018Food___Cakes_and_Sweet_Sweet_pancakes_with_blueberries_and_strawberries_on_the_table_126359_.jpg',
          name: 'Блины',
          price: 800,
          discount: 45,
          destination: '55.739175,37.599744',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://cs14.pikabu.ru/post_img/big/2022/05/27/4/1653624673187914118.jpg',
          name: 'Борщ',
          price: 650,
          discount: 15,
          destination: '55.758309,37.652426',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://www.gastronom.ru/binfiles/images/20220803/b66f3800.jpg',
          name: 'Салат',
          price: 300,
          discount: 90,
          destination: '55.747880,37.621029',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://smstretching.ru/wp-content/uploads/2022/01/toa-heftiba-inDRPMBfX8M-unsplash-scaled.jpeg',
          name: 'Рыба',
          price: 200,
          discount: 75,
          destination: '55.740977,37.640684',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://plus-one.ru/files/blogposts/2021/03/6678-rss.jpg',
          name: 'Овощи',
          price: 322,
          discount: 45,
          destination: '55.756864,37.626159',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://xn----8sbehgcimb3cfabqj3b.xn--p1ai/upload/iblock/aad/m0bd4wbun3efkwe3ygotwkpclyt05mp1/-Elena-Ruy-Fotobank-Lori-_4_-_1_-_1_.jpg',
          name: 'Шампиньоны',
          price: 200,
          discount: 15,
          destination: '55.747618,37.590389',
          customerId: 1,
          courierId: 1,
          isActive: false,
        },

        {
          img: 'https://overtime.life/sites/default/files/styles/800x535/public/detail_image/3b345756774127.59bb8c4faf1ed.jpg?itok=k2hCJFTX',
          name: 'Пончик',
          price: 242,
          discount: 62,
          destination: '55.770225,37.633463',
          customerId: 1,
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