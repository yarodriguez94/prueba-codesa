"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user-controller"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/rol', user_controller_1.default.listRoles);
        this.router.get('/rol/:id', user_controller_1.default.getRol);
        this.router.get('/', user_controller_1.default.list);
        this.router.get('/:id', user_controller_1.default.getOneUser);
        this.router.post('/', user_controller_1.default.createUser);
        this.router.put('/:id', user_controller_1.default.updateUser);
        this.router.delete('/:id', user_controller_1.default.deleteUser);
    }
}
exports.default = new UserRoutes().router;
