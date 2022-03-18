// Requiere environment
require("dotenv").config();

//Define server
const Server = require("./Api/Server");

//Define config
const config = require("./Config/Environments");

//Creates server instance
const server = new Server();

//Starts server on specified port
server.run(config.PORT);
