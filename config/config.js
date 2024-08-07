module.exports = {
    PORT: process.env.PORT || "3001",

// Detalles de conexión de la BASE DE DATOS
    database: {
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASS: process.env.DB_PASS || 'root',
        DB_NAME: process.env.DB_NAME || 'trailerflix',
        DB_PORT: process.env.DB_PORT || 3008,
        dialect: process.env.DB_DIALECT || "mysql",
    }
}