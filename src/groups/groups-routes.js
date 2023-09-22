import { Router } from "express";
import groupsController from "./groups-controller";
import verifyUser from "../middlewares/verify-user";
import authorize from '../middlewares/authorize'

const groupsRouter = Router();

groupsRouter.get('/', groupsController.readAll);
groupsRouter.get('/:id', authorize, verifyUser, groupsController.read);
groupsRouter.patch('/:id', authorize, verifyUser, groupsController.update);
groupsRouter.post('/', authorize, groupsController.add);
groupsRouter.delete('/:id', authorize, verifyUser, groupsController.delete);
groupsRouter.get('/members/:groupId', groupsController.listAllMember);
groupsRouter.post('/add-member/:groupId', authorize, verifyUser, groupsController.addMember);
groupsRouter.delete('/delete-member/:groupId/:userId', authorize, verifyUser, groupsController.deleteMember);

export default groupsRouter;
