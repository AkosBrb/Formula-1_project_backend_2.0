import { Router } from "express";
import resultsController from "./results-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const raceWeekendRouter = Router();

resultsRouter.get('/:searchParam', resultsController.readAll);
resultsRouter.post('/', verifyUser, verifyAdmin, resultsController.add);

export default raceWeekendRouter