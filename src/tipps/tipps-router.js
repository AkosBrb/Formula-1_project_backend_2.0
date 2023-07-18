import { Router } from "express";
import tippsController from "./tipps-controller";

const tippsRouter = Router();

tippsRouter.get('/:search', tippsController.read);
tippsRouter.post('/', tippsController.add);
tippsRouter.delete('/:raceWeekend');

export default tippsRouter