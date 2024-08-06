const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');


class Actor extends Model {}
Actor = sequelize.define("actor", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
   nombre_apellido: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

module.exports = Actor;