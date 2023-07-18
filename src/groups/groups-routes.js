import { Router } from "express";
import groupsController from "./groups-controller";

const groupsRouter = Router();

groupsRouter.get('/', groupsController.readAll);
groupsRouter.patch('/:id', groupsController.update);
groupsRouter.post('/', groupsController.add);
groupsRouter.delete('/:id', groupsController.delete);
groupsRouter.get('/members/:id', groupsController.listAllMember);
groupsRouter.post('/add-member', groupsController.addMember);
groupsRouter.delete('/delete-member', groupsController.deleteMember);

export default groupsRouter;
