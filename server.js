//Requiere la conexion a bd
const database= require('./database/model/index')
const sequelize = require('./database/conect_mysql_db');
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");

const app = express();

const corsOptions = {
  origin: "http://localhost:"+config.PORT
};

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database

db.sequelize.sync().then(() => {
  initial(); // Just use it in development, at the first time execution!. Delete it in production
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API de Trailerflix." });
});

// api routes
require("./app/routes/contenido.routes")(app);


// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


roles = [{
    id: 1,
    name: "user"
}, {
    id: 2,
    name: "moderator"
}, {
    id: 3,
    name: "admin"
}]
// Just use it in development, at the first time execution!. Delete it in production
function initial() {
  roles.forEach(rol => {
    console.log("==========>",rol)
    Role.findOrCreate({
      where: {id: rol.id},
      defaults: {
            id: rol.id,
            name: rol.name,
      }
    }).then((rolRow, isCreated) => {
    if(isCreated){
          //user created
          console.log('creted rol', rolRow);
      }
    });
  })

}

