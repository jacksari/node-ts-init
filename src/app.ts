// Servidor de Express
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import './config/db';

// Rutas
import routeProject from './routes/project.route';

//const socketio = require('socket.io');
//const Sockets  = require('./sockets');

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(port: number) {

        this.app  = express();
        this.port = port;

        // Http server
        //this.server = http.createServer( this.app );
        
        // Configuraciones de sockets
        //this.io = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../src/public' ) ) );

        // CORS
        this.app.use( cors() );

        this.app.use(express.json())

    }

    routes() {
        this.app.use('/api/v1/project', routeProject);        
    }

    // Esta configuración se puede tener aquí o como propieda de clase
    configurarSockets() {
        //new Sockets( this.io );
    }

    static init(port: number){
        return new Server(port);
    }

    start() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        //this.configurarSockets();

        this.routes();

        // Inicializar Server
        this.app.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }
}