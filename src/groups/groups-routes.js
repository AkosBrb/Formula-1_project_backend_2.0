import { Router } from "express";
import groupsController from "./groups-controller";

const groupsRouter = Router();

groupsRouter.get('/all', groupsController.readAll);
groupsRouter.get('/:id', groupsController.read);
groupsRouter.post('/search', groupsController.search);
groupsRouter.patch('/:id', groupsController.update);
groupsRouter.post('/add', groupsController.add);
groupsRouter.delete('/:id', groupsController.delete);

export default groupsRouter;
