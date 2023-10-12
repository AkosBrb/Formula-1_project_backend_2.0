import raceWeekendService from "./raceWeekend-service"

const raceWeekendController = {
    readAll: async (req, res, next) => {
        try {
            const results = await raceWeekendService.readAllResult(req.params);
            res.json(results)
        } catch (err) {
            next(err)
        }
    },

    add: async (req, res, next) => {
        try {
            const newResult = await raceWeekendService.addResult(req.body);
            res.json(newResult)
        } catch (err) {
            next(err)
        }
    }
}

export default raceWeekendController