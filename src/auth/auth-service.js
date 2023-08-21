import { nanoid } from "nanoid"
import bcrypt from "bcrypt";
import usersModel from "../user/users-model";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../constats/constants";
import HttpError from "../utils/httpError";

const authService = {

    register: async ({ email, password, name, birth }) => {
        const id = nanoid(20);
        const hashedPassword = await bcrypt.hash(password, 10);
        return usersModel.create(id, email, hashedPassword, name, birth)
    },

    login: async ({ email, password }) => {
        const userResult = await usersModel.readAll(email);
        const dbUser = userResult.rows[0];
        if (!dbUser) throw new Error("Invalid email/password!");

        if (await bcrypt.compare(password, dbUser.password)) {
            const token = jwt.sign({ id: dbUser.id, email: dbUser.email }, JWT_SECRET);
            return { token }
        }

        throw new HttpError("Invalid email/password!", 403)
    }
}

export default authService