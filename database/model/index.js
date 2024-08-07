const config = require("../../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.database.DB_NAME,
  config.database.DB_USER,
  config.database.DB_PASS,
  {
    host: config.database.DB_HOST,
    port: config.database.DB_PORT,
    dialect: config.database.dialect,
  }
);

const database = {};

database.Sequelize = Sequelize;
database.Op = Op;
database.sequelize = sequelize;

database.actor = require("./actor.model.js")(sequelize, Sequelize, DataTypes);
database.categoria = require("./categoria.model.js")(sequelize, Sequelize, DataTypes);
database.contenido = require("./contenido.model.js")(sequelize, Sequelize, DataTypes);
database.genero = require("./genero.model.js")(sequelize, Sequelize, DataTypes);
database.tag= require("./tag.model.js")(sequelize, Sequelize, DataTypes);

database.contenido.belongsToMany(database.tag, {
  through: "contenido_tag",
  foreignKey: "id_contenido",
  otherKey: "id_tag"
});
database.tag.belongsToMany(database.contenido, {
  through: "contenido_tag",
  foreignKey: "id_tag",
  otherKey: "id_contenido"
});
database.contenido.belongsToMany(database.actor, {
  through: "contenido_actor",
  foreignKey: "id_contenido",
  otherKey: "id_actor"
});

database.actor.belongsToMany(database.contenido, {
  through: "contenido_actor",
  foreignKey: "id_actor",
  otherKey: "id_contenido"
});

database.categoria.belongsToMany(database.contenido, {
  through: "categoria_contenido",
  foreignKey: "categoria_id",
  otherKey: "contenido_id"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = database;