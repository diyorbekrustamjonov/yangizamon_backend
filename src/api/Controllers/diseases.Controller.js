import validation from "#validations/diseases.Validation"
import model from "#models/diseases.Model"
import { resolve } from "path" 

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({...req.params})

        if(valid.status === false) throw new Error(valid.message)
        
		const disease = await model.GET_ONE({ ...req.params })

        if(!disease) throw new Error("Disease not found")


        res.status(200).json({
            status: 200,
            message: "Disease successfully fetched",
            data: disease
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
		let diseases = await model.GET()

        if(!diseases) throw new Error("Diseases not found")

		diseases = diseases.map(disease => {
			disease.disease_image = `${process.env.API_URL}/images/diseases/${disease.disease_image}`
			return disease
		})

        res.status(200).json({
            status: 200,
            message: "Diseases successfully fetched",
            data: diseases
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

		const valid = validation.POST( { ...req.body, ...req.files } )

        if(valid.status === false) throw new Error(valid.message)
		
		if(!await model.checkUserId({ user_id: req.body.disease_user_id })) throw new Error("User not found")
		if(!await model.checkCategoryId({ category_id: req.body.disease_category_id })) throw new Error("Category not found")
		
		const disease = await model.POST( { ...req.body, disease_image: `${Date.now() + req.files.disease_image.name}` } )

        if(!disease) throw new Error("disease not created")

		await req.files.disease_image.mv(resolve(process.cwd(), "src", "uploads", "images", "diseases", disease.disease_image), (err) => {
			if(err) throw new Error(err)
		})

		disease.disease_image = `${process.env.API_URL}/images/diseases/${disease.disease_image}`

        res.status(200).json({
            status: 200,
            message: "Disease successfully created",
            data: disease
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

		const valid = validation.PUT( { ...req.body, ...req.files } )

        if(valid.status === false) throw new Error(valid.message)
		
		if(req.body.disease_user_id && !await model.checkUserId({ user_id: req.body.disease_user_id })) throw new Error("User not found")
		if(req.body.disease_category_id && !await model.checkCategoryId({ category_id: req.body.disease_category_id })) throw new Error("Category not found")
		

		if(req?.files?.disease_image) {
			const disease = await model.PUT( { ...req.body, disease_image: `${Date.now() + req.files.disease_image.name}` } )

			if(!disease) throw new Error("disease not found")

			req.files.disease_image.mv(resolve(process.cwd(), "src", "uploads", "images", "diseases", disease.disease_image), (err) => {
				if(err) throw new Error(err)
			})

			disease.disease_image = `${process.env.API_URL}/images/diseases/${disease.disease_image}`
	
			res.status(200).json({
				status: 200,
				message: "Disease successfully updated",
				data: disease
			})
		}else{
			const disease = await model.PUT( { ...req.body } )

			if(!disease) throw new Error("disease not found")

			disease.disease_image = `${process.env.API_URL}/images/diseases/${disease.disease_image}`
	
			res.status(200).json({
				status: 200,
				message: "Disease successfully updated",
				data: disease
			})
		}

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

		const valid = validation.DELETE({...req.body})

        if(valid.status === false) throw new Error(valid.message)
        
		const disease = await model.DELETE({ ...req.body })

        if(!disease) throw new Error("disease not found")


        res.status(200).json({
            status: 200,
            message: "Disease successfully deleted",
            data: disease
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