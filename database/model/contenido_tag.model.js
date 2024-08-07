const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');

const Contenido_tag = sequelize.define('Contenido_tag', {
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: 'contenido', // nombre de la tabla de Items
            key: 'id'
        },
        primaryKey: true
    },
    id_tag: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag', // nombre de la tabla de tags
            key: 'id'
        },
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = Contenido_tag;