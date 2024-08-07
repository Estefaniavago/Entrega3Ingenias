const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');

// Tabla de Genero
class Genero extends Model {}
Genero = sequelize.define("genero",
    {
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
}, {
    sequelize,
    modelName: "Genero",
    tableName: "genero"
});

module.exports = Genero;