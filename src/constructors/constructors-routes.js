import { Router } from "express";
import constructorController from "./constructors-controller";

const constructorsRouter = Router();

constructorsRouter.get('/all', constructorController.readAll);
constructorsRouter.post('/add', constructorController.add);
constructorsRouter.patch('/update/:id', constructorController.update);
constructorsRouter.delete('/delete/:id', constructorController.delete);

export default constructorsRouter