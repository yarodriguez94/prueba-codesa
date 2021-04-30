"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    //funcion para la listar todos los usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const USERS = yield database_1.default.query('SELECT usuario.ID_USUARIO,usuario.ID_ROL,usuario.NOMBRE,usuario.ACTIVO,rol.NOMBRE as NOMBREROL FROM usuario  INNER JOIN ROL  ON usuario.ID_ROL = rol.ID_ROL ORDER BY ID_USUARIO ASC ');
            res.json(USERS);
        });
    }
    //funcion para traer todos los roles
    listRoles(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield database_1.default.query('SELECT ID_ROL,NOMBRE FROM ROL');
            //resp.json(roles);
            roles.length > 0 ? resp.json(roles) : resp.status(404).json({ text: "No hay datos para mostrar" });
        });
    }
    //funcion para traer el nombre de rol
    getRol(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const status = yield database_1.default.query('SELECT ID_ROL,NOMBRE FROM rol WHERE ID_ROL = ?', [id]);
            let lengUser = status.length;
            if (lengUser > 0) {
                return resp.json(status[0]);
            }
            resp.status(404).json({ text: "No hay datos para mostrar" });
        });
    }
    //funcion para la busqueda de  solo usuario
    getOneUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const USER = yield database_1.default.query('SELECT * FROM usuario WHERE ID_USUARIO = ?', [id]);
            let lengUser = USER.length;
            if (lengUser > 0) {
                return resp.json(USER[0]);
            }
            resp.status(404).json({ text: "The user doesn't exist" });
        });
    }
    //funcion para crear un usuario
    createUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const insert = yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            resp.json({ message: 'User Saved' });
        });
    }
    //funcion para actualizar un usuario 
    updateUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updateUser = req.body;
            yield database_1.default.query('UPDATE usuario set ? WHERE  ID_USUARIO = ?', [req.body, id]);
            resp.json({ text: 'User updte' });
        });
    }
    //funcion para borrar un usuario
    deleteUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE ID_USUARIO = ?', [id]);
            resp.json({ message: "The user was deleted" });
        });
    }
}
const userController = new UserController();
exports.default = userController;
