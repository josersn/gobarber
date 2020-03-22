import express from "express";
import routes from "./routes";

import "./database";

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

export default new App().server;