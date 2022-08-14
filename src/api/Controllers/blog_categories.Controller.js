import validation from "#validations/blog_categories.Validation"
import model from "#models/blog_categories.Model"

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({ ...req.params })

        if(valid.status === false) throw new Error(valid.message)
        
		const blog_category = await model.GET_ONE({ ...req.params })

        if(!blog_category) throw new Error("Blog category not found")


        res.status(200).json({
            status: 200,
            message: "Blog category successfully fetched",
            data: blog_category
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
		let blog_categories = await model.GET()

        if(!blog_categories) throw new Error("Blog categories not found")

        res.status(200).json({
            status: 200,
            message: "Blog categories successfully fetched",
            data: blog_categories
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

		if(await model.checkBlogCategory({ ...req.body })) throw new Error("Blog category already exists")

		let blog_category = await model.POST({...req.body})

        if(!blog_category) throw new Error("Blog category not created")

        res.status(200).json({
            status: 200,
            message: "Blog category successfully created",
            data: blog_category
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

		if(await model.checkBlogCategory({ ...req.body })) throw new Error("Blog category already exists")

		let blog_category = await model.PUT({...req.body})

        if(!blog_category) throw new Error("Blog category not updated")

        res.status(200).json({
            status: 200,
            message: "Blog category successfully updated",
            data: blog_category
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
        
		const blog_category = await model.DELETE({ ...req.body })

        if(!blog_category) throw new Error("Blog category not deleted")


        res.status(200).json({
            status: 200,
            message: "Blog category successfully deleted",
            data: blog_category
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