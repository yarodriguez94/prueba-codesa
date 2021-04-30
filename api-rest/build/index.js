"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
//import  from '../build/index.js';
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Funcion que tiene la confiuración del server
    config() {
        //Se realiza la configuración del puerto
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //para escuchar las peticiones
        this.app.use(cors_1.default()); //
        this.app.use(express_1.default.json()); //para recibir la información en formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //para recibir datos de un formulario
    }
    //funcion que tiene las rutas que se van a manejar para las peticiones
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/api/users', user_routes_1.default);
    }
    //función inicio el servicio y escucha todas las peticiones GET
    start() {
        //se indica que debe escuchar el puerto configurado en la función config()
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
