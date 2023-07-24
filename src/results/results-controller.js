import resultsService from "./results-service"

const resultsController = {
    readAll: async (req, res, next) => {
        try {
            const results = await resultsService.readAllResult(req.params);
            res.json(results)
        } catch (err) {
            next(err)
        }
    },

    add: async (req, res, next) => {
        try {
            const newResult = await resultsService.addResult(req.body);
            res.json(newResult)
        } catch (err) {
            next(err)
        }
    }
}

export default resultsController