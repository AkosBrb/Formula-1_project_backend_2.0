import client from "../db/db"
import { addRacerQuery, deleteRacerQuery, readRacerQuery, updateRacerQuery } from "./racers-queries"

const racersModel = {

    readAll: async (name) => {
        return client.query(readRacerQuery, [name])
    },

    add: async (num, name, team, points) => {
        return client.query(addRacerQuery, [num, name, team, points])
    },

    update: async (num, name, team, points, id) => {
        return client.query(updateRacerQuery, [num, name, team, points, id])
    },

    delete: async (id) => {
        return client.query(deleteRacerQuery, [id])
    }
}

export default racersModel