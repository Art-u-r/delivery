const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User }) {
      this.belongsTo(User, { as: 'Customer', foreignKey: 'customerId' });
      this.belongsTo(User, { as: 'Courier', foreignKey: 'courierId' });
    }
  }
  Order.init(
    {
      img: DataTypes.TEXT,
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      destination: DataTypes.STRING,
      customerId: DataTypes.INTEGER,
      courierId: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
