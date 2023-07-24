import client from "../db/db"
import HttpError from "../utils/HttpError"
import { createUserQuery, deleteUser, readUserQuery, readUsersQuery, updateUser } from "./users-queries"

const usersModel = {

    readAll: async (email) => {
        return client.query(readUsersQuery, [email])
    },

    create: async (id, { email, password, name, birth }) => {
        try {
            return client.query(createUserQuery, [id, email, password, name, birth])
        } catch {
            throw new HttpError('Server error : already registered', 500);
        }
    },

    update: async (id, email, name, birth) => {
        return client.query(updateUser, [email, name, birth, id])
    },

    delete: async (id) => {
        return client.query(deleteUser, [id])
    }
}

export default usersModel