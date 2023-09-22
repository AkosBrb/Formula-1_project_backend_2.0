import { nanoid } from "nanoid";
import groupsModel from "./groups-model"
import usersModel from "../user/users-model";

const groupsService = {

    readGroups: async (queries) => {
        const direction = queries.order ? `ORDER BY name ${queries.order}` : "ORDER BY name ASC"
        const search = queries.search ? queries.search : null;
        const allGroup = await groupsModel.readAllGroups(direction, search);
        return allGroup.rows
    },

    readGroup: async ({ id }) => {
        const group = await groupsModel.readGroupById(id);
        return group.rows;
    },

    updateGroup: async ({ id }, { name }) => {
        const updatedGroup = await groupsModel.updateGroup(id, name);
        return updatedGroup.rows;
    },

    addGroup: async ({ name, userId, description, isPublic }) => {
        const id = nanoid(12);
        const response = await usersModel.readAll(userId)
        const userName = await response.rows[0].name
        const newGroup = await groupsModel.addGroup(id, name, userId, description, isPublic);
        await groupsModel.addMember(userId, userName, id);
        return newGroup.rows[0];
    },

    deleteGroup: async ({ id }) => {
        const deletedGroup = await groupsModel.deleteGroup(id);
        return deletedGroup.rows[0];
    },

    listMembers: async ({ groupId }) => {
        const members = await groupsModel.listAllMember(groupId);
        const data = members.rows.map(member => {
            return {
                userName: member.user_name,
                points: member.user_points_in_group
            }
        })
        return data
    },

    addMember: async ({ groupId }, { id }) => {
        const response = await usersModel.readAll(id)
        const userName = await response.rows[0].name
        const newMember = await groupsModel.addMember(id, userName, groupId);
        return newMember.rows[0]
    },

    deleteMember: async ({ groupId, userId }) => {
        const deletedMember = await groupsModel.deleteMember(userId, groupId);
        return deletedMember.rows
    }
}

export default groupsService
