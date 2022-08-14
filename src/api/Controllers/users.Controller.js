import validation from "#validations/users.Validation"
import model from "#models/users.Model"
import { resolve } from "path" 

const GET_ONE = async (req, res) => {
	try{
        if(
			req.user.user_role != "admin"
		) throw new Error("You are not admin!")

		const valid = validation.GET_ONE({...req.params})

        if(valid.status === false) throw new Error(valid.message)
        
		const user = await model.GET_ONE({ ...req.params })

        if(!user) throw new Error("User not found")


        res.status(200).json({
            status: 200,
            message: "Users successfully fetched",
            data: user
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
		if(
			req.user.user_role != "admin"
		) throw new Error("You are not admin!")

		let users = await model.GET()

        if(!users) throw new Error("Users not found")

		users = users.map(user => {
			user.user_image = `${process.env.API_URL}/images/users/${user.user_image}`
			return user
		})

        res.status(200).json({
            status: 200,
            message: "Users successfully fetched",
            data: users
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
		
		if(await model.checkUser({ user_phone: req.body.user_phone })) throw new Error("User already exists")
		if(!await model.checkProfession({ user_profession_id: req.body.user_profession_id })) throw new Error("Profession not found")
		
		 
		const user = await model.POST( { ...req.body, user_image: `${Date.now() + req.files.user_image.name}` } )

        if(!user) throw new Error("User not created")

		await req.files.user_image.mv(resolve(process.cwd(), "src", "uploads", "images", "users", user.user_image), (err) => {
			if(err) throw new Error(err)
		})

		user.user_image = `${process.env.API_URL}/images/users/${user.user_image}`

        res.status(200).json({
            status: 200,
            message: "User successfully created",
            data: user
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
		
		if(req.body.user_phone && await model.checkUser({ user_phone: req.body.user_phone })) throw new Error("User already exists")
		if(req.body.user_profession_id && !await model.checkProfession({ user_profession_id: req.body.user_profession_id })) throw new Error("Profession not found")
		
		if(req?.files?.user_image) {
			const user = await model.PUT( { ...req.body, user_image: `${Date.now() + req.files.user_image.name}` } )

			if(!user) throw new Error("User not found")

			req.files.user_image.mv(resolve(process.cwd(), "src", "uploads", "images", "users", user.user_image), (err) => {
				if(err) throw new Error(err)
			})

			user.user_image = `${process.env.API_URL}/images/users/${user.user_image}`
	
			res.status(200).json({
				status: 200,
				message: "User successfully updated",
				data: user
			})
		}else{
			const user = await model.PUT( { ...req.body } )

			if(!user) throw new Error("User not found")


			user.user_image = `${process.env.API_URL}/images/users/${user.user_image}`
	
			res.status(200).json({
				status: 200,
				message: "User successfully updated",
				data: user
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
        
		const user = await model.DELETE({ ...req.body })

        if(!user) throw new Error("User not found")


        res.status(200).json({
            status: 200,
            message: "User successfully deleted",
            data: user
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