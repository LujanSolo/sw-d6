const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weapon extends Model { }

Weapon.init(
  {
    weapon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    damage: {
      type: DataTypes.INTEGER
    },
    bonus_damage: {
      type: DataTypes.INTEGER
    }
  },
  {
    // link to db connection
    sequelize,
    // set to false to remove 'created_at' and 'updated_at' fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'weapons'
  }
);

module.exports = Weapon;