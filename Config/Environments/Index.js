//Require environment variables file
require("dotenv");

//Require evironment config settings
const DEVELOPMENT = require("./development");
const PRODUCTION = require("./production");

//Checks actual environment
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV == "production") {
  currentEnv = PRODUCTION;
}

module.exports = currentEnv;
