"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index-controller");
class Routes {
    constructor() {
        this.routes = express_1.Router();
        this.config();
    }
    config() {
        this.routes.get('/', index_controller_1.indexController.index);
    }
}
const IndexRoutes = new Routes();
exports.default = IndexRoutes.routes;
