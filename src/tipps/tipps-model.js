import client from '../db/db'
import { addTippsQuery, deleteTippsQuery, readAllTippQuery } from './tipps-queries'

const tippsModel = {

    readTipps: async (searchParam) => {
        return client.query(readAllTippQuery, [searchParam])
    },

    addTipps: async (
        raceWeekend, groupId, userId, firstPlace, secondPlace, thirdPlace,
        fourthPlace, fifthPlace
    ) => {
        return client.query(addTippsQuery, [raceWeekend, groupId, userId,
            firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace])
    },

    deleteTipps: async (raceWeekend) => {
        return client.query(deleteTippsQuery, [raceWeekend])
    }
}

export default tippsModel;
