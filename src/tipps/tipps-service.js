import tippsModel from "./tipps-model"

const tippsServices = {

    readTipps: async ({ search }) => {
        const searchParam = search ? search : null;
        const tipps = await tippsModel.readTipps(searchParam);
        return tipps.rows
    },

    addTipps: async ({
        raceWeekend, groupId, userId, firstPlace, secondPlace, thirdPlace,
        fourthPlace, fifthPlace
    }) => {
        const newTipp = await tippsModel.addTipps(
            raceWeekend, groupId, userId, firstPlace, secondPlace, thirdPlace,
            fourthPlace, fifthPlace
        );
        return newTipp.rows
    },

    deleteTipps: async ({ raceWeekend }) => {
        const deletedTipps = await tippsModel.deleteTipps(raceWeekend);
        return deletedTipps.rows
    }
}

export default tippsServices