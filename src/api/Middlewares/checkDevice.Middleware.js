import '#config/index'

const checkDevice = (req, res, next) => {
	try{
        if(
            !req.user
        ) throw new Error("Please login first")
		if(
			req.user.agent != req.rawHeaders[req.rawHeaders.findIndex(x => x === "User-Agent" || "user-agent") + 1]
		) throw new Error("Device not allowed!")
        next()
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}

}

export default checkDevice