import { nanoid } from "nanoid"
import racersModel from "./racers-model"

const racersService = {

    readAllRacer: async ({ name }) => {
        const racerName = name || null;
        const racers = await racersModel.readAll(racerName)
        return racers.rows
    },

    addRacer: async ({ num, name, team, points }) => {
        const id = nanoid(20);
        return racersModel.add(id, num, name, team, points)
    },

    updateRacer: async (id, { num, name, team, points }) => {
        return racersModel.update(num, name, team, points, id)
    },

    deleteRacer: async ({ id }) => {
        return racersModel.delete(id)
    }
}

export default racersService