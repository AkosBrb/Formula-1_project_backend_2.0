import tippsServices from "./tipps-service"

const tippsController = {

    read: async (req, res, next) => {
        try {
            const tipps = await tippsServices.readTipps(req.params);
            res.json(tipps)
        } catch (err) {
            next(err)
        }
    },

    add: async (req, res, next) => {
        try {
            const newTipps = await tippsServices.addTipps(req.body);
            res.json(newTipps);
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedTipps = await tippsServices.deleteTipps(req.params);
            res.json(deletedTipps);
        } catch (err) {
            next(err)
        }
    }
}

export default tippsController