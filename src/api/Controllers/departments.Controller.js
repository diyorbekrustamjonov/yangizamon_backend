import validation from "#validations/departments.Validation"
import model from "#models/departments.Model"
import { resolve } from "path" 

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({...req.params})

        if(valid.status === false) throw new Error(valid.message)
        
		const department = await model.GET_ONE({ ...req.params })

        if(!department) throw new Error("department not found")


        res.status(200).json({
            status: 200,
            message: "Department successfully fetched",
            data: department
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
		let departments = await model.GET()

        if(!departments) throw new Error("Departments not found")

		departments = departments.map(department => {
			department.department_image = `${process.env.API_URL}/images/departments/${department.department_image}`
			department.department_icon = `${process.env.API_URL}/images/departments/${department.department_icon}`

			return department
		})

        res.status(200).json({
            status: 200,
            message: "Departments successfully fetched",
            data: departments
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
		
		const department = await model.POST( { ...req.body, department_image: `${Date.now() + req.files.department_image.name}` } )

        if(!department) throw new Error("department not created")

		await req.files.department_image.mv(resolve(process.cwd(), "src", "uploads", "images", "departments", department.department_image), (err) => {
			if(err) throw new Error(err)
		})

		department.department_image = `${process.env.API_URL}/images/departments/${department.department_image}`

        res.status(200).json({
            status: 200,
            message: "Department successfully created",
            data: department
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
		
		if(req?.files?.department_image) {
			const department = await model.PUT({ ...req.body, department_image: `${Date.now() + req.files.department_image.name}`})

			if(!department) throw new Error("Department not found")

			await req.files.department_image.mv(resolve(process.cwd(), "src", "uploads", "images", "departments", department.department_image), (err) => {
				if(err) throw new Error(err)
			})

			department.department_image = `${process.env.API_URL}/images/departments/${department.department_image}`
	
			res.status(200).json({
				status: 200,
				message: "Department successfully updated",
				data: department
			})
		}else{
			const department = await model.PUT( { ...req.body } )

			if(!department) throw new Error("Department not found")

			department.department_image = `${process.env.API_URL}/images/departments/${department.department_image}`
	
			res.status(200).json({
				status: 200,
				message: "Department successfully updated",
				data: department
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
        
		const department = await model.DELETE({ ...req.body })

        if(!department) throw new Error("Department not found")


        res.status(200).json({
            status: 200,
            message: "Department successfully deleted",
            data: department
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
