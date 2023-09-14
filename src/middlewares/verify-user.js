import usersModel from "../user/users-model";

async function verifyUser(req, res, next) {
    try {
        const userId = req.params;
        const userEmail = await usersModel.readAll(req.user.email)
        const { id: authUserId } = req.user;

        if (!userId && !userEmail) return next(console.log("User is missing!"))
        if (!authUserId) return next(console.log("Token is missing!"))

        if (userId === authUserId || userEmail) return next()

        return next(console.log("Permission denied!"))
    } catch (err) {
        next(err)
    }
}

export default verifyUser