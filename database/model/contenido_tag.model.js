// Importamos las dependencias necesarias
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');

//Tabla de Contenido_tag
class Contenido_tag extends Model {}
Contenido_tag = sequelize.define("Contenido_tag",
    {
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: 'contenido',
            },
        primaryKey: true
    },
    id_tag: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag',
            key: 'id'
        },
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = Contenido_tag;