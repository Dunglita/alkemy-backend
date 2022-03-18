module.exports = {
  PORT: process.env.DEV_PORT,
  DB: {
    user: process.env.DEV_USER,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DIALECT,
  },
};
