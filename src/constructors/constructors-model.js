import client from "../db/db"
import { addConstructorQuery, deleteConstructorQuery, readAllConstructorQuery, readConstructorQuery, updateConstructorQuery } from "./constructors-queries"

const constructorsModel = {

    read: async (id) => {
        return client.query(readConstructorQuery, [id])
    },

    readAll: async () => {
        return client.query(readAllConstructorQuery)
    },

    add: async (id, name, points) => {
        return client.query(addConstructorQuery, [id, name, points])
    },

    update: async (id, name, points) => {
        return client.query(updateConstructorQuery, [name, points, id])
    },

    delete: async (id) => {
        return client.query(deleteConstructorQuery, [id])
    }
}

export default constructorsModel