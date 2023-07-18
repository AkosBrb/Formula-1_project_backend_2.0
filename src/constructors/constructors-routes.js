import { Router } from "express";
import constructorController from "./constructors-controller";
import verifyAdmin from "../middlewares/verify-admin";
import verifyUser from "../middlewares/verify-user";

const constructorsRouter = Router();

constructorsRouter.get('/all', verifyUser, constructorController.readAll);
constructorsRouter.post('/add', verifyUser, verifyAdmin, constructorController.add);
constructorsRouter.patch('/update/:id', verifyUser, verifyAdmin, constructorController.update);
constructorsRouter.delete('/delete/:id', verifyUser, verifyAdmin, constructorController.delete);

export default constructorsRouter