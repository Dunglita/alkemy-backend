const express = require("express");
const router = express();
const getRoutes = require("./Routes/Routes.js");
class Server {
  constructor() {
    this.server = router;
    getRoutes(router);
  }

  run(port) {
    this.server.listen(port, (err) => {
      if (err) {
        process.exit(1);
      }
      console.log(`Server listening on port: ${port}`);
    });
  }
}

module.exports = Server;
