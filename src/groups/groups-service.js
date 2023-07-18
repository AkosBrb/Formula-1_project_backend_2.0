import { nanoid } from "nanoid";
import groupsModel from "./groups-model"

const groupsService = {

    readGroups: async (queries) => {
        const direction = queries.order ? `ORDER BY name ${queries.order}` : "ASC"
        const search = queries.search ? queries.search : null;
        const allGroup = await groupsModel.readAllGroups(direction, search);
        return allGroup.rows
    },

    updateGroup: async ({ id }, { name }) => {
        const updatedGroup = await groupsModel.updateGroup(id, name);
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
    },

    listMembers: async ({ groupId }) => {
        const members = await groupsModel.listAllMember(groupId);
        return members.rows
    },

    addMember: async ({ userId, groupId }) => {
        const newMember = await groupsModel.addMember(userId, groupId);
        return newMember.rows
    },

    deleteMember: async ({ userId, groupId }) => {
        const deletedMember = await groupsModel.deleteMember(userId, groupId);
        return deletedMember.rows
    }
}

export default groupsService
