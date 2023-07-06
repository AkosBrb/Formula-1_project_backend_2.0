import authService from "./auth-service"

const authController = {

    register: async (req, res, next) => {
        try {
            const newUser = await authService.register(req.body)
            res.json(newUser.rows)
        } catch (err) {
            next(err)
        }
    },

    login: async (req, res, next) => {
        try {
            const loggedUserToken = await authService.login(req.body)
            res.json(loggedUserToken)
        } catch (err) {
            next(err)
        }
    },
    userIsLogged: (req, res, next) => {
        try {
            res.status(200).send({
                userExists: true
            })
        } catch (err) {
            next(err)
        }
    }
}

export default authController