import racersService from "./racers-service"

const racersController = {

    read: async (req, res, next) => {
        try {
            const racer = await racersService.readRacer(req.params)
            res.json(racer)
        } catch (err) {
            next(err)
        }
    },

    readAll: async (req, res, next) => {
        try {
            const allRacer = await racersService.readAllRacer()
            res.json(allRacer)
        } catch (err) {
            next(err)
        }
    },

    add: async (req, res, next) => {
        try {
            const newRacer = await racersService.addRacer(req.body)
            res.json(newRacer.rows)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params
            const updatedRacer = await racersService.updateRacer(id, req.body)
            res.json(updatedRacer.rows)
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedRacer = await racersService.deleteRacer(req.params)
            res.json(deletedRacer.rows)
        } catch (err) {
            next(err)
        }
    }
}

export default racersController