import { Router } from "express";
import raceWeekendController from "./raceWeekend-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const raceWeekendRouter = Router();

raceWeekendRouter.get('/:searchParam', raceWeekendController.readAll);
raceWeekendRouter.post('/', verifyUser, verifyAdmin, raceWeekendController.add);

export default raceWeekendRouter