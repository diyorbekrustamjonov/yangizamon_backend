// jwt middlewares for api
import '#config/index'
import JWT from 'jsonwebtoken'

const checkToken = (req, res, next) => {
	try{
		const token = req.headers?.token
		if (!token) {
			return res.status(401).json({
				status: 401,
				message: 'Access Denied'
			})
		}
		JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					status: 401,
					message: 'Invalid Token'
				})
			}
			req.user = decoded
			next()
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}

}

export default checkToken