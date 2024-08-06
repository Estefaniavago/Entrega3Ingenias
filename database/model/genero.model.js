const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');


class Genero extends Model {}
Genero = sequelize.define("genero", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
   nombre: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

module.exports = Genero;