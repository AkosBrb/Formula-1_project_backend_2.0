import groupsService from "./groups-service"

const groupsController = {

    readAll: async (req, res, next) => {
        try {
            const groups = await groupsService.readGroups();
            res.json(groups)
        } catch (err) {
            next(err)
        }
    },

    read: async (req, res, next) => {
        try {
            const group = await groupsService.readGroup(req.params);
            res.json(group);
        } catch (err) {
            next(err)
        }
    },

    search: async (req, res, next) => {
        try {
            const searchedGroup = await groupsService.searchGroup(req.body);
            res.json(searchedGroup)
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedGroup = await groupsService.updateGroup(req.body);
            res.json(updatedGroup)
        } catch (err) {
            next(err)
        }
    },

    add: async (req, res, next) => {
        try {
            const newGroup = await groupsService.addGroup(req.body);
            res.json(newGroup);
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedGroup = await groupsService.deleteGroup(req.params);
            res.json(deletedGroup);
        } catch (err) {
            next(err);
        }
    }
}

export default groupsController