const express = require("express");
const routes = require("./routes");
class App {
    constructor(){
        this.server = express();

        this.middleware();
        this.routes();
        
    }
    //midlleware para confirgurar o json como corpo da api
    middleware(){
        this.server.use(express.json());
    }

    // chama as rotas;
    routes(){
        this.server.use(routes);
    }
}

module.exports = new App().server;