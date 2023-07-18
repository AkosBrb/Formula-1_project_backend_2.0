import { Router } from "express";
import tippsController from "./tipps-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";

const tippsRouter = Router();

tippsRouter.get('/:search', verifyUser, tippsController.read);
tippsRouter.post('/', verifyUser, tippsController.add);
tippsRouter.delete('/:raceWeekend', verifyUser, verifyAdmin, tippsController.delete);

export default tippsRouter