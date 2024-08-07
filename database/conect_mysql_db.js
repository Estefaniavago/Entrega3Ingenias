// IMPORTAR CONFIGURACIÓN
const config = require('./config');
const { Sequelize } = require('sequelize');

// ENVIRONMENT
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

// CONEXION A LA BASE DE DATOS
sequelize.authenticate().then(() => {
  console.log('Conexión a base de datos exitosa.');
}).catch((error) => {
  console.error('No fue posible conectarse a la base de datos: ', error);
});

// EXPORTAR LA CONEXIÓN
module.exports = sequelize;