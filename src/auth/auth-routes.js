import { Router } from "express";
import authController from "./auth-controller";
import authorize from "../middlewares/authorize";
import verifyUser from "../middlewares/verify-user";

const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.get('/', authorize, verifyUser, authController.userIsLogged)

export default authRouter