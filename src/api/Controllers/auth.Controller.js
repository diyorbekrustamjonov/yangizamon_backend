import validation from "#validations/auth.Validation"
import model from "#models/auth.Model"
import JWT from "#utils/jwt.Util"

const LOGIN = async (req, res) => {
	try{

        const valid = validation.LOGIN({...req.body})

        if(valid.status === false) throw new Error(valid.message)
        
		const user = await model.LOGIN({ ...req.body })

        if(!user) throw new Error("User not found")

        const agent = req.rawHeaders[req.rawHeaders.findIndex(x => x === "User-Agent" || "user-agent") + 1]

        res.send({
            status: 200,
            message: "User has been logged",
            token:  await JWT.sign({ user_id: user.user_id, user_role: user.user_role, agent})

        })
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

export default {
    LOGIN
}