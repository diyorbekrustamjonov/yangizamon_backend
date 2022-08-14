import validation from "#validations/professions.Validation"
import model from "#models/professions.Model"

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({ ...req.params })

        if(valid.status === false) throw new Error(valid.message)
        
		const profession = await model.GET_ONE({ ...req.params })

        if(!profession) throw new Error("Profession not found")


        res.status(200).json({
            status: 200,
            message: "Profession successfully fetched",
            data: profession
        })
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const GET = async (req, res) => {
	try{
		let professions = await model.GET()

        if(!professions) throw new Error("Professions not found")

        res.status(200).json({
            status: 200,
            message: "Professions successfully fetched",
            data: professions
        })

	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const POST = async (req, res) => {
	try{
		if(
			req.user.user_role != "admin"
		) throw new Error("You are not admin!")


		const valid = validation.POST({ ...req.body })

        if(valid.status === false) throw new Error(valid.message)

		if(await model.checkProfession({ ...req.body })) throw new Error("Profession already exists")

		let profession = await model.POST({...req.body})

        if(!profession) throw new Error("Profession not created")

        res.status(200).json({
            status: 200,
            message: "Professions successfully created",
            data: profession
        })

	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const PUT = async (req, res) => {
	try{
		if(
			req.user.user_role != "admin"
		) throw new Error("You are not admin!")


		const valid = validation.PUT({ ...req.body })

        if(valid.status === false) throw new Error(valid.message)

		if(await model.checkProfession({ ...req.body })) throw new Error("Profession already exists")

		let profession = await model.PUT({...req.body})

        if(!profession) throw new Error("Profession not updated")

        res.status(200).json({
            status: 200,
            message: "Profession successfully updated",
            data: profession
        })

	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const DELETE = async (req, res) => {
	try{
        if(
			req.user.user_role != "admin"
		) throw new Error("You are not admin!")

		const valid = validation.DELETE({ ...req.body })

        if(valid.status === false) throw new Error(valid.message)
        
		const profession = await model.DELETE({ ...req.body })

        if(!profession) throw new Error("Profession not found")


        res.status(200).json({
            status: 200,
            message: "Profession successfully deleted",
            data: profession
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
    GET_ONE,
    GET,
	POST,
	PUT,
	DELETE
}