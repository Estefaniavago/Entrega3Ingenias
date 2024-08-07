module.exports = app => {
    const contenidocontroller = require("../controller/contenidocontroller");
  
    const rutas = require("express").Router();
  

    // ver todos los items
    rutas.get("/", contenidocontroller.findAll);


  
    app.use("/trailerflix", rutas);
  };