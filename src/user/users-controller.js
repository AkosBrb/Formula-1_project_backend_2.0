import usersService from "./users-service"

const usersController = {

    readAll: async (req, res, next) => {
        try {
            const users = await usersService.readAllUser(req.params);
            res.json(users)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const newUser = await usersService.createUser(req.body);
            res.json(newUser)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedUser = await usersService.updateUser(req.params, req.body);
            res.json(updatedUser);
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedUser = await usersService.deleteUser(req.params);
            res.json(deletedUser);
        } catch (err) {
            next(err)
        }
    }
}

export default usersController