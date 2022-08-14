import JWT from "jsonwebtoken"
import "#config/index"

export default {
	sign: async (payload) => JWT.sign(payload, process.env.JWT_SECRET),
	verify: async (payload) => JWT.verify(payload, process.env.JWT_SECRET),
}