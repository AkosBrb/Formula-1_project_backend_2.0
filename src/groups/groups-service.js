import { nanoid } from "nanoid";
import groupsModel from "./groups-model"

const groupsService = {

    readGroups: async (queries) => {
        const direction = queries.order ? `ORDER BY name ${queries.order}` : "ORDER BY name ASC"
        const search = queries.search ? queries.search : null;
        const allGroup = await groupsModel.readAllGroups(direction, search);
        return allGroup.rows
    },

    readGroup: async ({ id }) => {
        const { group, total } = await groupsModel.readGroupById(id);
        return { group, total };
    },

    updateGroup: async ({ id }, { name }) => {
        const updatedGroup = await groupsModel.updateGroup(id, name);
        return updatedGroup.rows;
    },

    addGroup: async ({ name, userId, description, isPublic }) => {
        const id = nanoid(12);
        const newGroup = await groupsModel.addGroup(id, name, userId, description, isPublic);
        await groupsModel.addMember(userId, id);
        return newGroup.rows[0];
    },

    deleteGroup: async ({ id }) => {
        const deletedGroup = await groupsModel.deleteGroup(id);
        return deletedGroup.rows[0];
    },

    listMembers: async ({ groupId, limit }) => {
        const limitPerPage = limit ? limit : 10;
        const members = await groupsModel.listAllMember(groupId, limitPerPage);
        const data = members.rows.map(member => {
            return {
                userName: member.name,
                points: member.user_points_in_group
            }
        })
        return data
    },

    addMember: async ({ groupId }, { id }) => {
        const newMember = await groupsModel.addMember(id, groupId);
        return newMember.rows[0]
    },

    deleteMember: async ({ groupId, userId }) => {
        const deletedMember = await groupsModel.deleteMember(userId, groupId);
        return deletedMember.rows
    }
}

export default groupsService
