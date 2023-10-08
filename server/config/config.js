const Sequelize = require('sequelize');

require('dotenv').config();

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });

const sequelize = new Sequelize(

  //database name
  'weapons_db',
  //user
  'root',
  //password
  'myPassword',
  {
    //database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;