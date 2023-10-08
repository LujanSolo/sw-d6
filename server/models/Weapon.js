const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weapon extends Model {}

Weapon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    damage: {
      type: DataTypes.INTEGER
    },
  },
  {
    // link to db connection
    sequelize,
    // set to false to remove 'created_at' and 'updated_at' fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'weapon'
  }
);

module.exports = Weapon;