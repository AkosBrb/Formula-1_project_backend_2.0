import { Router } from "express";
import tippsController from "./tipps-controller";
import verifyUser from "../middlewares/verify-user";
import verifyAdmin from "../middlewares/verify-admin";
import authorize from "../middlewares/authorize";

const tippsRouter = Router();

tippsRouter.get('/:search', authorize, verifyUser, tippsController.read);
tippsRouter.post('/', authorize, verifyUser, tippsController.add);
tippsRouter.delete('/:raceWeekend', authorize, verifyUser, verifyAdmin, tippsController.delete);

export default tippsRouter