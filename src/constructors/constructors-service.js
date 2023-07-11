import { nanoid } from "nanoid"
import constructorsModel from "./constructors-model"

const constructorsService = {

    readAllConstructor: async ({ id }) => {
        const constructors = await constructorsModel.readAll(id)
        return constructors.rows
    },

    addContructor: async ({ name, points }) => {
        const id = nanoid(20);
        const newConstructor = await constructorsModel.add(id, name, points);
        return newConstructor.rows
    },

    updateContructor: async (id, { name, points }) => {
        const updatedContructor = await constructorsModel.update(id, name, points)
        return updatedContructor.rows
    },

    deleteConstructor: async ({ id }) => {
        const deletedConstructor = await constructorsModel.delete(id)
        return deletedConstructor.rows
    }
}

export default constructorsService