import { Router } from "express";
import resultsController from "./results-controller";

const resultsRouter = Router();

resultsRouter.get('/', resultsController.readAll);
resultsRouter.post('/', resultsController.add);

export default resultsRouter