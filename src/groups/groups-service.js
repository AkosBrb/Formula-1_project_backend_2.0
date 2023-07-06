import { nanoid } from "nanoid";
import groupsModel from "./groups-model"

const groupsService = {

    readGroups: async () => {
        const allGroup = await groupsModel.readAllGroups();
        return allGroup.rows
    },

    readGroup: async ({ id }) => {
        const group = await groupsModel.readGroup(id);
        return group.rows[0];
    },

    searchGroup: async ({ searchParam }) => {
        const searchedGroup = await groupsModel.searchGroup(searchParam);
        return searchedGroup.rows[0];
    },

    updateGroup: async ({ name }) => {
        const updatedGroup = await groupsModel.updateGroup(name);
        return updatedGroup.rows;
    },

    addGroup: async ({ name, user_id }) => {
        const id = nanoid(12);
        const newGroup = await groupsModel.addGroup(id, name, user_id);
        return newGroup.rows[0];
    },

    deleteGroup: async ({ id }) => {
        const deletedGroup = await groupsModel.deleteGroup(id);
        return deletedGroup.rows[0];
    }
}

export default groupsService
