import { Router } from "express";
import groupsController from "./groups-controller";
import verifyUser from "../middlewares/verify-user";
import authorize from '../middlewares/authorize'

const groupsRouter = Router();

groupsRouter.get('/', groupsController.readAll);
groupsRouter.patch('/:id', verifyUser, groupsController.update);
groupsRouter.post('/', authorize, groupsController.add);
groupsRouter.delete('/:id', verifyUser, groupsController.delete);
groupsRouter.get('/members/:groupId', groupsController.listAllMember);
groupsRouter.post('/add-member/:groupId', verifyUser, groupsController.addMember);
groupsRouter.delete('/delete-member/:groupId', verifyUser, groupsController.deleteMember);

export default groupsRouter;
