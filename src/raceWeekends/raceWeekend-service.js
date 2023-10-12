import raceWeekendModel from "./raceWeekend-model";

const raceWeekendService = {
    readAllResult: async ({ searchParam }) => {
        const raceWeekend = searchParam || null;
        const results = await raceWeekendModel.readAllResult(raceWeekend);
        return results.rows;
    },

    addResult: async (body) => {
        const newResult = await raceWeekendModel.addResult(body);
        return newResult.rows
    }
}

export default raceWeekendService