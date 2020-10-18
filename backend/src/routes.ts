import Router from "express";
import multer from "multer";
import uploadConfig from "./config/upload";

import OrphanagesController from "./controllers/OrphanagesController";
import TokenController from "./controllers/TokenController";
import UsersController from "./controllers/UsersController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.post("/users", UsersController.create);
routes.get("/users", UsersController.index);
routes.get("/users/token", TokenController.index);

export default routes;
