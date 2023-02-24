module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: '$2a$10$xlSj8NxxJagChRbXA2Y2ceb8Evpf1TY4dthO3y8rol95f1uG9CPvW', // @12345678@
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '$2a$10$wg22XOEb8.PRKbtYYMFqReED2MD7bdreJXFASZccstRQQ5CUG0JZ6', // #minhasupersenha#
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '$2a$10$koxFlyP9L4bIZrVSJT.X4OWTYwHB5bBlMBHiQtTJQkCUU6/NvUhtu', // !senhadificil!
        role: 'customer',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
