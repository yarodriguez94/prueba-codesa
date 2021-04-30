import  {  Router } from 'express';
import { indexController } from '../controllers/index-controller';

class Routes {

    public routes:Router = Router();

    constructor (){
        this.config();        
    }

    config(): void {

        this.routes.get('/',indexController.index);

    }

}

const IndexRoutes = new Routes();
export default IndexRoutes.routes;