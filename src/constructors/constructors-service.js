import { nanoid } from "nanoid"
import constructorsModel from "./constructors-model"

const constructorsService = {

    readAllConstructor: async () => {
        const constructors = await constructorsModel.readAll()
        return constructors.rows
    },

    readConstructor: async ({ id }) => {
        const constructor = await constructorsModel.read(id)
        return constructor.rows
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