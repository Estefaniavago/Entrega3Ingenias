const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');

// Tabla de Contenido_actor
class Contenido_actor extends Model {}
Contenido_actor = sequelize.define("Contenido_actor", {
    id_contenido:  {
        type: DataTypes.INTEGER,
        references: {
        model: 'contenido',
        key: 'id'
        },
        primaryKey: true
    },
    id_actor: {
        type: DataTypes.INTEGER,
        references: {
        model: 'actor',
        key: 'id'
        },
        primaryKey: true
    }
});

module.exports = Contenido_actor;
