// Importo Sequelize
const config = require ("../../config/config");
const { Sequelize, DataTypes, Op } = require ("sequelize");

// Importo modelos
const Contenido_actor = require("./contenido_actor.model");
const Actor = require("./actor.model");
const Contenido = require("./contenido.model");
const Tag = require("./tag.model");
const Genero = require("./genero.model");
const Contenido_tag = require("./contenido_tag.model");

// Conexión con la base de datos MySQL
const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASS,
    {
        host: config.DB_HOST,
        port: config.DB_PORT,
        dialect: config.dialect
    }
);

// Defino la estructura de la base de datos
const db = {}

// Defino datos
db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;


// Conexión con tablas

// Tabla Contenido
db.contenido = require('./contenido.model');

// Tabla Genero
db.genero = require('./genero.model');

// Tabla Categoria
db.categoria = require ('./categoria.model');

// Tabla Contenido_Tag
db.contenido_tag = require('./contenido_tag.model');

// Tabla Tag
db.tag = require('./tag.model');

// Tabla Contenido_Actor
db.contenido_actor = require('./contenido_actor.model');

// Tabla Actor
db.actor = require('./actor.model');


// Relaciones
db.contenido.belongsToMany(db.actor,
    { through: db.contenido_actor });

db.actor.belongsToMany(db.contenido,
    { through: db.contenido_actor });

db.contenido.belongsToMany(db.tag,
    { through: db.contenido_tag });

db.tag.belongsToMany(db.contenido,
    { through: db.contenido_tag });

db.genero.hasMany(db.contenido,
    { foreignKey: 'genero_id' });

db.contenido.belongsTo(db.genero,
    { foreignKey: 'genero_id' });

// Exportar base de datos
module.exports = db;
