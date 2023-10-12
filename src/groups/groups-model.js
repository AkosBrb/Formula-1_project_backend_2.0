import client from "../db/db"
import { addGroupQuery, addMemberQuery, deleteGroupQuery, deleteMember, getGroupByIdQuery, listAllMember, readAllGroupQuery, totalMember, updateGroupNameQuery } from "./groups-queris"

const groupsModel = {

    readAllGroups: async (direction, search) => {
        return client.query(`${readAllGroupQuery} ${direction}`, [search]);
    },

    readGroupById: async (id) => {
        const totalNumberOfMembers = await client.query(totalMember, [id]);
        const group = await client.query(getGroupByIdQuery, [id]);
        return {
            group: group.rows,
            total: totalNumberOfMembers.rows[0].count
        }
    },

    updateGroup: async (id, name) => {
        return client.query(updateGroupNameQuery, [name, id]);
    },

    deleteGroup: async (id) => {
        return client.query(deleteGroupQuery, [id]);
    },

    addGroup: async (id, name, userId, description, isPublic) => {
        return client.query(addGroupQuery, [id, name, description, isPublic, userId]);
    },

    addMember: async (userId, groupId) => {
        return client.query(addMemberQuery, [userId, groupId])
    },

    listAllMember: async (groupId, limitPerPage) => {
        return client.query(listAllMember, [groupId, limitPerPage])
    },

    deleteMember: async (userId, groupId) => {
        return client.query(deleteMember, [groupId, userId])
    }
}

export default groupsModel
