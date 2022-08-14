import validation from "#validations/disease_categories.Validation"
import model from "#models/disease_categories.Model"

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({ ...req.params })

        if(valid.status === false) throw new Error(valid.message)
        
		const disease_category = await model.GET_ONE({ ...req.params })

        if(!disease_category) throw new Error("Disease category not found")


        res.status(200).json({
            status: 200,
            message: "Disiase category successfully fetched",
            data: disease_category
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
		let disease_categories = await model.GET()

        if(!disease_categories) throw new Error("Disease categories not found")

        res.status(200).json({
            status: 200,
            message: "Disease categories successfully fetched",
            data: disease_categories
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

		if(await model.checkDiseaseCategory({ ...req.body })) throw new Error("Disease category already exists")

		let disease_category = await model.POST({...req.body})

        if(!disease_category) throw new Error("Disease category not created")

        res.status(200).json({
            status: 200,
            message: "Disease category successfully created",
            data: disease_category
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

		if(await model.checkDiseaseCategory({ ...req.body })) throw new Error("Disease category already exists")

		let disease_category = await model.PUT({...req.body})

        if(!disease_category) throw new Error("Disease category not updated")

        res.status(200).json({
            status: 200,
            message: "Disease category successfully updated",
            data: disease_category
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
        
		const disease_category = await model.DELETE({ ...req.body })

        if(!disease_category) throw new Error("Disease category not deleted")


        res.status(200).json({
            status: 200,
            message: "Disease category successfully deleted",
            data: disease_category
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