import { Router } from "express";
import racersRouter from "../racers/racers-routes";
import constructorsRouter from "../constructors/constructors-routes";
import groupsRouter from "../groups/groups-routes";
import tippsRouter from "../tipps/tipps-router";
import usersRouter from "../user/users-router";
import raceWeekendRouter from "../raceWeekends/raceWeekend-router";

const apiRouter = Router();

apiRouter.use('/racers', racersRouter)
apiRouter.use('/constructors', constructorsRouter)
apiRouter.use('/groups', groupsRouter)
apiRouter.use('/tipps', tippsRouter)
apiRouter.use('/race-weekend', raceWeekendRouter)
apiRouter.use('/users', usersRouter)

export default apiRouter