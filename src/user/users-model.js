import client from "../db/db"
import { createUserQuery, deleteUser, readUserQuery, readUsersQuery, updateUser } from "./users-queries"

const usersModel = {

    read: async (email) => {
        return client.query(readUserQuery, [email])
    },

    readAll: async () => {
        return client.query(readUsersQuery)
    },

    create: async (id, email, password, name, birth) => {
        return client.query(createUserQuery, [id, email, password, name, birth])
    },

    update: async (id, email, name, birth) => {
        return client.query(updateUser, [email, name, birth, id])
    },

    delete: async (id) => {
        return client.query(deleteUser, [id])
    }
}

export default usersModel