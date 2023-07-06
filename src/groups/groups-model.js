import client from "../db/db"
import { addGroupQuery, deleteGroupQuery, readAllGroupQuery, readGroupQuery, searchGroupQuery, updateGroupNameQuery } from "./groups-queris"

const groupsModel = {

    readAllGroups: async () => {
        return client.query(readAllGroupQuery);
    },

    readGroup: async (id) => {
        return client.query(readGroupQuery, [id]);
    },

    searchGroup: async (searchParam) => {
        return client.query(searchGroupQuery, [searchParam]);
    },

    updateGroup: async (name) => {
        return client.query(updateGroupNameQuery, [name]);
    },

    deleteGroup: async (id) => {
        return client.query(deleteGroupQuery, [id]);
    },

    addGroup: async (id, name, user_id) => {
        return client.query(addGroupQuery, [id, name, user_id]);
    }
}

export default groupsModel
