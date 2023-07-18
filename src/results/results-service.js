import resultsModel from "./results-model";

const resultsService = {
    readAllResult: async ({ searchParam }) => {
        const raceWeekend = searchParam || null;
        const results = await resultsModel.readAllResult(raceWeekend);
        return results.rows;
    },

    addResult: async (body) => {
        const newResult = await resultsModel.addResult(body);
        return newResult.rows
    }
}

export default resultsService