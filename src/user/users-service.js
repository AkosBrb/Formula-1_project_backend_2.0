import { nanoid } from "nanoid";
import usersModel from "./users-model";

const usersService = {

    readAllUser: async ({ email }) => {
        const searchedEmail = email || null;
        const users = await usersModel.readAll(searchedEmail);
        return users.rows
    },

    createUser: async (body) => {
        const id = nanoid(24);
        const newUser = await usersModel.create(id, body);
        return newUser.rows;
    },

    updateUser: async ({ id }, { email, name, birth }) => {
        const updatedUser = await usersModel.update(id, email, name, birth);
        return updatedUser.rows
    },

    deleteUser: async ({ id }) => {
        const deletedUser = await usersModel.delete(id);
        return deletedUser.rows;
    }
}

export default usersService;