import { Router } from "express";
import UserController from "./app/controllers/UserController.js";

const routes = new Router();

routes.get("/", UserController.store);

export default routes;
