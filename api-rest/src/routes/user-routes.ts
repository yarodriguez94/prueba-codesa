import express, { Router } from 'express';

import userController from '../controllers/user-controller';

class UserRoutes {

    router : Router = Router();

    constructor(){

        this.config();

    }

    config(){

        this.router.get('/rol', userController.listRoles);
        this.router.get('/rol/:id', userController.getRol);
        this.router.get('/', userController.list);
        this.router.get('/:id', userController.getOneUser);
        this.router.post('/', userController.createUser);
        this.router.put('/:id', userController.updateUser);
        this.router.delete('/:id', userController.deleteUser);

    }

}

export default new UserRoutes().router;