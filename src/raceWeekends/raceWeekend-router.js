import { Router } from "express";
import raceWeekendController from "./results-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const raceWeekendRouter = Router();

raceWeekendController.get('/:searchParam', resultsController.readAll);
raceWeekendController.post('/', verifyUser, verifyAdmin, resultsController.add);

export default raceWeekendRouter