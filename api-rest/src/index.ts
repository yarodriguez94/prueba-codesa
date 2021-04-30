import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import UserRoutes from './routes/user-routes';
import indexRoutes from './routes/index-routes';
//import  from '../build/index.js';


class Server {

    public app: Application;


    constructor (){

        this.app = express();
        this.config();
        this.routes();

    }
    //Funcion que tiene la confiuración del server
    config() : void{

        //Se realiza la configuración del puerto
        this.app.set('port', process.env.PORT || 3000);
        
        this.app.use(morgan('dev'));//para escuchar las peticiones
        this.app.use(cors());//
        this.app.use(express.json());//para recibir la información en formato json
        this.app.use(express.urlencoded({extended: false}));//para recibir datos de un formulario

    }
    //funcion que tiene las rutas que se van a manejar para las peticiones
    routes(): void {
        
        this.app.use('/', indexRoutes);
        this.app.use('/api/users',UserRoutes)


    }
    //función inicio el servicio y escucha todas las peticiones GET
    start() {
        //se indica que debe escuchar el puerto configurado en la función config()
        this.app.listen(this.app.get('port'), ()=>{

            console.log('Server on port', this.app.get('port'));

        });

    }

}

const server = new Server();
server.start();

