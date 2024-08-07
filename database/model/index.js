const Actor = require('./actor.model');
const Contenido = require('./contenido.model');
const Tag = require('./tag.model');
//const Items_Reparto = require('./items_repartos.modelo')
//const Items_Tags = require('./items_tags.modelo');
const Genero = require('./genero.model');
const Contenido_tag = require('./contenido_tag.model');
const Contenido_Reparto = require('./contenido_reparto.model');


Contenido.belongsToMany(Actor, { through: Contenido_Reparto });
Actor.belongsToMany(Contenido, { through: Contenido_Reparto });

Contenido.belongsToMany(Tag, { through: Contenido_tag });
Tag.belongsToMany(Contenido, { through: Contenido_tag });

Genero.hasMany(Contenido, { foreignKey: 'genero_id' });
Contenido.belongsTo(Genero, { foreignKey: 'genero_id' });

module.exports = { Actor, Contenido, Tag, Contenido_Reparto, Contenido_tag, Genero };