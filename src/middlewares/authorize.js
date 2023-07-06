import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constats/constants"

function authorize(req, res, next) {
    const token = req.headers.authorization;
    if (!token) res.status(422).send({ tokenIs: null })
    const tokenBody = token?.slice(7);
    if (tokenBody) {
        jwt.verify(tokenBody, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(200).send({
                    userExists: false
                })
            } else {
                req.user = { ...decoded }
                next()
            }
        })
    }
}

export default authorize