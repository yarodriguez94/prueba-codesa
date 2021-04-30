import { Request, Response } from 'express';

class IndexController {

    public index (req : Request, resp: Response){

        resp.json({text: 'API run in /api/users'});

    }

}
export const indexController = new IndexController;