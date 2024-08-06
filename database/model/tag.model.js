const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');


class Tag extends Model {}
Tag = sequelize.define("tag", {
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

module.exports = Tag;