import client from "../db/db"
import { addGroupQuery, addMemeberQuery, deleteGroupQuery, deleteMember, getGroupByIdQuery, listAllMember, readAllGroupQuery, updateGroupNameQuery } from "./groups-queris"

const groupsModel = {

    readAllGroups: async (direction, search) => {
        return client.query(`${readAllGroupQuery} ${direction}`, [search]);
    },

    readGroupById: async (id) => {
        return client.query(`${getGroupByIdQuery}`, [id])
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
        return client.query(addMemeberQuery, [userId, groupId])
    },

    listAllMember: async (groupId) => {
        return client.query(listAllMember, [groupId])
    },

    deleteMember: async (userId, groupId) => {
        return client.query(deleteMember, [groupId, userId])
    }
}

export default groupsModel
