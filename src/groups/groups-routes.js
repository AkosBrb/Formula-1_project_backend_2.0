import { Router } from "express";
import groupsController from "./groups-controller";
import verifyUser from "../middlewares/verify-user";

const groupsRouter = Router();

groupsRouter.get('/', groupsController.readAll);
groupsRouter.patch('/:id', verifyUser, groupsController.update);
groupsRouter.post('/', verifyUser, groupsController.add);
groupsRouter.delete('/:id', verifyUser, groupsController.delete);
groupsRouter.get('/members/:id', groupsController.listAllMember);
groupsRouter.post('/add-member', verifyUser, groupsController.addMember);
groupsRouter.delete('/delete-member', verifyUser, groupsController.deleteMember);

export default groupsRouter;
