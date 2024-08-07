const database = require("../database/model/index.js");
const contenido = database.Contenido;
//const actor = database.Actor;
//const contenido_reparto = database.Contenido_Reparto;
//const Genero = database.Genero
//const Tags = database.Tag
const sequelize = require('../database/conect_mysql_db.js');
const { Op } = require('sequelize');


// Ver todos los items
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  contenido.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};