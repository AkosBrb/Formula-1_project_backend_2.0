import { Router } from "express";
import racersController from "./racers-controller";

const racersRouter = Router();

racersRouter.get('/all', racersController.readAll)
racersRouter.delete('/delete/:id', racersController.delete)
racersRouter.get('/racer/:id', racersController.read)
racersRouter.post('/add', racersController.add)
racersRouter.patch('/update/:id', racersController.update)

export default racersRouter