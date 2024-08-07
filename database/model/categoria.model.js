const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');


class Categoria extends Model {}
Categoria = sequelize.define("categoria", {
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

module.exports = Categoria;