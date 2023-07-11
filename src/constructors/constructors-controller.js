import constructorsService from "./constructors-service"

const constructorController = {

    readAll: async (req, res, next) => {
        try {
            const allConstructor = await constructorsService.readAllConstructor(req.params)
            res.json(allConstructor)
        } catch (err) {
            next(err)
        }
    },

    add: async (req, res, next) => {
        try {
            const newContructor = await constructorsService.addContructor(req.body)
            res.json(newContructor)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params
            const updatedContructor = await constructorsService.updateContructor(id, req.body)
            res.json(updatedContructor)
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedConstructor = await constructorsService.deleteConstructor(req.params)
            res.json(deletedConstructor)
        } catch (err) {
            next(err)
        }
    }
}

export default constructorController