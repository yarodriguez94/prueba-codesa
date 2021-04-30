import { Request, response, Response } from 'express';

import pool from '../database';

class UserController {
    //funcion para la listar todos los usuarios
    public async list ( req: Request , res: Response): Promise<void> {

        const USERS = await pool.query('SELECT usuario.ID_USUARIO,usuario.ID_ROL,usuario.NOMBRE,usuario.ACTIVO,rol.NOMBRE as NOMBREROL FROM usuario  INNER JOIN ROL  ON usuario.ID_ROL = rol.ID_ROL ORDER BY ID_USUARIO ASC ');
        res.json(USERS);


    }
    //funcion para traer todos los roles

    public async listRoles ( req: Request, resp: Response){

        const roles = await pool.query('SELECT ID_ROL,NOMBRE FROM ROL');
        //resp.json(roles);
        roles.length > 0 ? resp.json(roles) : resp.status(404).json({text:"No hay datos para mostrar"});
    }
    
    //funcion para traer el nombre de rol
    public async getRol (req:Request, resp:Response): Promise<any>{

        const { id } = req.params; 
        const status = await pool.query('SELECT ID_ROL,NOMBRE FROM rol WHERE ID_ROL = ?', [id]);
        let lengUser = status.length;
        if (lengUser > 0) {

            return resp.json(status[0]);

        }
        resp.status(404).json({text : "No hay datos para mostrar"});
                        
    }
    //funcion para la busqueda de  solo usuario
    public async getOneUser ( req: Request , resp: Response): Promise<any> {

        const { id } = req.params; 
        const USER = await pool.query('SELECT * FROM usuario WHERE ID_USUARIO = ?', [id]);
        let lengUser = USER.length;
        if (lengUser > 0) {

            return resp.json(USER[0]);

        }
        resp.status(404).json({text : "The user doesn't exist"});

    }
    
    //funcion para crear un usuario
    public async createUser (req:Request, resp:Response ): Promise<void>{

        const insert = await pool.query('INSERT INTO usuario set ?',[req.body]);
        resp.json( {message: 'User Saved'} );

    }

    //funcion para actualizar un usuario 
    public async updateUser (req: Request, resp:Response): Promise<void>{

        const { id } = req.params; 
        const updateUser = req.body;
        await pool.query('UPDATE usuario set ? WHERE  ID_USUARIO = ?', [req.body, id]);
         resp.json ({text: 'User updte'});
        
    }

    //funcion para borrar un usuario
    public async deleteUser( req: Request, resp:Response): Promise<void>{

        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE ID_USUARIO = ?', [id]);
        resp.json({ message:"The user was deleted"});

    }
    }

const userController = new UserController();
export default userController;