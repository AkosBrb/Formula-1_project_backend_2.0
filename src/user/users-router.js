import { Router } from "express";
import usersController from "./users-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const usersRouter = Router();

usersRouter.get('/:email', verifyUser, verifyAdmin, usersController.readAll);
usersRouter.post('/', usersController.create);
usersRouter.patch('/:id', verifyUser, usersController.update);
usersRouter.delete('/:id', verifyUser, usersController.delete);

export default usersRouter;