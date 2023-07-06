import client from "../db/db"
import { addRacerQuery, deleteRacerQuery, readAllRacerQuery, readRacerQuery, updateRacerQuery } from "./racers-queries"

const racersModel = {

    read: async (id) => {
        return client.query(readRacerQuery, [id])
    },

    readAll: async () => {
        return client.query(readAllRacerQuery)
    },

    add: async (id, num, name, team, points) => {
        return client.query(addRacerQuery, [id, num, name, team, points])
    },

    update: async (num, name, team, points, id) => {
        return client.query(updateRacerQuery, [num, name, team, points, id])
    },

    delete: async (id) => {
        return client.query(deleteRacerQuery, [id])
    }
}

export default racersModel