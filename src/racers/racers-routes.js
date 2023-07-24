import { Router } from "express";
import racersController from "./racers-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const racersRouter = Router();

racersRouter.get('/:name', racersController.readAll)
racersRouter.delete('/:id', verifyUser, verifyAdmin, racersController.delete)
racersRouter.post('/', verifyUser, verifyAdmin, racersController.add)
racersRouter.patch('/:id', verifyUser, verifyAdmin, racersController.update)

export default racersRouter