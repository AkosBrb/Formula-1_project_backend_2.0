import client from "../db/db"
import { addGroupQuery, addMemeberQuery, deleteGroupQuery, deleteMember, listAllMember, readAllGroupQuery, readGroupQuery, searchGroupQuery, updateGroupNameQuery } from "./groups-queris"

const groupsModel = {

    readAllGroups: async (direction, search) => {
        return client.query(`${readAllGroupQuery} ${direction}`, [search]);
    },

    updateGroup: async (id, name) => {
        return client.query(updateGroupNameQuery, [name, id]);
    },

    deleteGroup: async (id) => {
        return client.query(deleteGroupQuery, [id]);
    },

    addGroup: async (id, name, user_id) => {
        return client.query(addGroupQuery, [id, name, user_id]);
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
