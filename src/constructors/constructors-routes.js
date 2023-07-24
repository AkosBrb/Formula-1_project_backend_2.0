import { Router } from "express";
import constructorController from "./constructors-controller";
import verifyAdmin from "../middlewares/verify-admin";
import verifyUser from "../middlewares/verify-user";

const constructorsRouter = Router();

constructorsRouter.get('/:id', constructorController.readAll);
constructorsRouter.post('/', verifyUser, verifyAdmin, constructorController.add);
constructorsRouter.patch('/:id', verifyUser, verifyAdmin, constructorController.update);
constructorsRouter.delete('/:id', verifyUser, verifyAdmin, constructorController.delete);

export default constructorsRouter