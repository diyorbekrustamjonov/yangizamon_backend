import validation from "#validations/contacts.Validation"
import model from "#models/contacts.Model"

const GET_ONE = async (req, res) => {
	try{
		const valid = validation.GET_ONE({ ...req.params })

        if(valid.status === false) throw new Error(valid.message)
        
		const contact = await model.GET_ONE({ ...req.params })

        if(!contact) throw new Error("Contact not found")


        res.status(200).json({
            status: 200,
            message: "Contact successfully fetched",
            data: contact
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
		let contacts = await model.GET()

        if(!contacts) throw new Error("Contacts not found")

        res.status(200).json({
            status: 200,
            message: "Contacts successfully fetched",
            data: contacts
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

		if(!await model.checkDepartmentId({ ...req.body })) throw new Error("Department not found")

		let contact = await model.POST({...req.body})

        if(!contact) throw new Error("Contact not created")

        res.status(200).json({
            status: 200,
            message: "Contact successfully created",
            data: contact
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

		if(req.body.contact_department_id && !await model.checkDepartmentId({ ...req.body })) throw new Error("Department not found")

		let contact = await model.PUT({...req.body})

        if(!contact) throw new Error("Contact not updated")

        res.status(200).json({
            status: 200,
            message: "Contact successfully updated",
            data: contact
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
        
		const contact = await model.DELETE({ ...req.body })

        if(!contact) throw new Error("Contact not deleted")


        res.status(200).json({
            status: 200,
            message: "Contact successfully deleted",
            data: contact
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