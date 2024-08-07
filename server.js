// Express
// Importaciones
const app = express();

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
const generoRoutes = require('./routes/genero');
const actorRoutes = require('./routes/actor');
const contenidoRoutes = require('./routes/contenido');
const tagRoutes = require('./routes/tag');
app.use('/generos', generoRoutes);
app.use('/actores', actorRoutes);
app.use('/contenidos', contenidoRoutes);
app.use('/tags', tagRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));


// Inicialización de datos en la base de datos
const initial = require('./database/initial');
db.sequelize.sync().then(() => {
    initial();
})


// Configuración
require('dotenv').config();
const express = require('express');
const db = require ('./database/model/index');

db.sequelize.sync().then(() => {
    initial();
})

function initial() {


// Datos iniciales en la base de datos
db.Genero.create({ nombre: 'Acción' });
db.Actor.create({ nombre: 'John Doe', apellido: 'Doe', nacimiento: '1980-01-01' });
db.Contenido.create({ titulo: 'Pulp Fiction', anio: 1994, duracion: 154, generoId: 1, actorId: 1 });
db.Tag.create({ nombre: 'Thriller' });
db.Tag.create({ nombre: 'Drama' });
db.ContenidoTag.create({ contenidoId: 1, tagId: 1 });
db.ContenidoTag.create({ contenidoId: 1, tagId: 2 });
console.log('Base de datos inicializada con éxito.');
}


