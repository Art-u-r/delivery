const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { as: 'Customer', foreignKey: 'customerId' });
      this.hasMany(Order, { as: 'Courier', foreignKey: 'courierId' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isCourier: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
