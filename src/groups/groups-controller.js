import groupsService from "./groups-service"

const groupsController = {

    readAll: async (req, res, next) => {
        try {
            const groups = await groupsService.readGroups(req.query);
            res.json(groups)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedGroup = await groupsService.updateGroup(req.params, req.body);
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
    },

    listAllMember: async (req, res, next) => {
        try {
            const members = await groupsService.listMembers(req.params)
            res.json(members)
        } catch (err) {
            next(err)
        }
    },

    addMember: async (req, res, next) => {
        try {
            const newMember = await groupsService.addMember(req.query)
            res.json(newMember)
        } catch (err) {
            next(err)
        }
    },

    deleteMember: async (req, res, next) => {
        try {
            const deletedMemeber = await groupsService.deleteMember(req.query);
            res.json(deletedMemeber)
        } catch (err) {
            next(err)
        }
    }
}

export default groupsController