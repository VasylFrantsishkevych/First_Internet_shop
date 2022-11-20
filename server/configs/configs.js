module.exports = {
    PORT: process.env.PORT || 5000,
    DB_NAME: process.env.DB_NAME || 'online_store',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 123445,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 5432,
    SECRET_KEY: process.env.DB_PORT || 'secret_key',
}