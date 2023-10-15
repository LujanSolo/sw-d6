const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Character extends Model { }

Character.init(
  {
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: truncate
    },
    name: {
      type: DataTypes.STRING,
    },
    character_class: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'characters'
  }
);

module.exports = Weapon;