module.exports = {
  PORT: process.env.PRO_PORT,
  DB: {
    user: process.env.PRO_USER,
    password: process.env.PRO_PASSWORD,
    database: process.env.PRO_DATABASE,
    host: process.env.PRO_DB_HOST,
    dialect: process.env.PRO_DIALECT,
  },
};
