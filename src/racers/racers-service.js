import { nanoid } from "nanoid"
import racersModel from "./racers-model"

const racersService = {

    readAllRacer: async (queries) => {
        const racerName = queries.name ? queries.name : null;
        const racers = await racersModel.readAll(racerName)
        return racers.rows
    },

    addRacer: async ({ num, name, team, points }) => {
        return racersModel.add(num, name, team, points)
    },

    updateRacer: async (id, { num, name, team, points }) => {
        return racersModel.update(num, name, team, points, id)
    },

    deleteRacer: async ({ id }) => {
        return racersModel.delete(id)
    }
}

export default racersService