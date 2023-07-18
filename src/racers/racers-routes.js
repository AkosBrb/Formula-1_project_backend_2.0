import { Router } from "express";
import racersController from "./racers-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const racersRouter = Router();

racersRouter.get('/all', racersController.readAll)
racersRouter.delete('/delete/:id', verifyUser, verifyAdmin, racersController.delete)
racersRouter.get('/racer/:id', racersController.read)
racersRouter.post('/add', verifyUser, verifyAdmin, racersController.add)
racersRouter.patch('/update/:id', verifyUser, verifyAdmin, racersController.update)

export default racersRouter