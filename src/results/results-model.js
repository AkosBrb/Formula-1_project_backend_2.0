import client from '../db/db'
import { addResultQuery, readAllResultQuery } from './results-queries'

const resultsModel = {
    readAllResult: async (raceWeekend) => {
        return client.query(readAllResultQuery, [raceWeekend])
    },

    addResult: async ({ raceWeekend, firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace }) => {
        return client.query(addResultQuery, [raceWeekend, firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace])
    }
}

export default resultsModel