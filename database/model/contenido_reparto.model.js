const { DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');

const Contenido_Reparto = sequelize.define('contenidoactor', {
    id_contenido:  {
        type: DataTypes.INTEGER,
        references: {
            model: 'contenido', // nombre de la tabla de Items
            key: 'id'
        },
        primaryKey: true
    },
    id_actor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'actor', // nombre de la tabla de Actores
            key: 'id'
        },
        primaryKey: true
    }
});

module.exports = Contenido_Reparto;
