const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conect_mysql_db');


class Contenido extends Model {}
Contenido.init({
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
},

titulo: {
type: DataTypes.STRING,
allowNull: false
},

id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false
},

id_genero: {
    type: DataTypes.INTEGER,
    allowNull: false
},

resumen: {
    type: DataTypes.STRING,
    allowNull: false
},

temporadas: {
    type: DataTypes.INTEGER
},

trailer: {
    type: DataTypes.STRING,
    allowNull: false
},

duracion: {
    type: DataTypes.INTEGER,
    allowNull: false
}

},
{
    sequelize,
    modelName: "Contenido",
    tableName: "contenido", // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar createdAt y updatedAt
});

module.exports = Contenido;