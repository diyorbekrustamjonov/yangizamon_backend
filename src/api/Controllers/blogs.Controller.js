import validation from "#validations/blogs.Validation"
import model from "#models/blogs.Model"
import { resolve } from "path" 

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({...req.params})

        if(valid.status === false) throw new Error(valid.message)
        
		const blog = await model.GET_ONE({ ...req.params })

        if(!blog) throw new Error("Blog not found")


		blog.slug = `/${blog.blog_title.replace(/\s+/g, '-').toLowerCase()}`

        res.status(200).json({
            status: 200,
            message: "Blog successfully fetched",
            data: blog
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
		let blogs = await model.GET()

        if(!blogs) throw new Error("Blogs not found")

		blogs = blogs.map(blog => {
			blog.blog_image = `${process.env.API_URL}/images/blogs/${blog.blog_image}`
			return blog
		})

		blogs = blogs.map(blog => {
			blog.slug = `/${blog.blog_title.replace(/\s+/g, '-').toLowerCase()}`
			return blog
		})

        res.status(200).json({
            status: 200,
            message: "Blogs successfully fetched",
            data: blogs
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
		
		if(!await model.checkUserId({ user_id: req.body.blog_user_id })) throw new Error("User not found")
		if(!await model.checkCategoryId({ category_id: req.body.blog_category_id })) throw new Error("Category not found")
		
		const blog = await model.POST( { ...req.body, blog_image: `${Date.now() + req.files.blog_image.name}` } )

        if(!blog) throw new Error("Blog not created")

		await req.files.blog_image.mv(resolve(process.cwd(), "src", "uploads", "images", "blogs", blog.blog_image), (err) => {
			if(err) throw new Error(err)
		})

		blog.blog_image = `${process.env.API_URL}/images/blogs/${blog.blog_image}`

        res.status(200).json({
            status: 200,
            message: "Blog successfully created",
            data: blog
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
		
		if(req.body.blog_user_id && !await model.checkUserId({ user_id: req.body.blog_user_id })) throw new Error("User not found")
		if(req.body.blog_category_id && !await model.checkCategoryId({ category_id: req.body.blog_category_id })) throw new Error("Category not found")
		

		if(req?.files?.blog_image) {
			const blog = await model.PUT( { ...req.body, blog_image: `${Date.now() + req.files.blog_image.name}` } )

			if(!blog) throw new Error("Blog not found")

			req.files.blog_image.mv(resolve(process.cwd(), "src", "uploads", "images", "blogs", blog.blog_image), (err) => {
				if(err) throw new Error(err)
			})

			blog.blog_image = `${process.env.API_URL}/images/blogs/${blog.blog_image}`
	
			res.status(200).json({
				status: 200,
				message: "Blog successfully updated",
				data: blog
			})
		}else{
			const blog = await model.PUT( { ...req.body } )

			if(!blog) throw new Error("Blog not found")

			blog.blog_image = `${process.env.API_URL}/images/blogs/${blog.blog_image}`
	
			res.status(200).json({
				status: 200,
				message: "Blog successfully updated",
				data: blog
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
        
		const blog = await model.DELETE({ ...req.body })

        if(!blog) throw new Error("Blog not found")


        res.status(200).json({
            status: 200,
            message: "Blog successfully deleted",
            data: blog
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