import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		contact_id: Joi.number().required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

const POST = (data) => {
	const schema = Joi.object({
		contact_department_id: Joi.number().required(),
		contact_user_name: Joi.string().trim().min(3).max(255).required(), 
		contact_user_phone: Joi.string().trim().regex(/^998[389][012345789][0-9]{7}$/).required(),
		contact_date: Joi.string().trim().min(3).max(255).required(), 
		contact_content: Joi.string().trim().min(3).max(255).required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}


const PUT = (data) => {
	const schema = Joi.object({
		contact_id: Joi.number().required(),
		contact_department_id: Joi.number(),
		contact_user_name: Joi.string().trim().min(3).max(255), 
		contact_user_phone: Joi.string().trim().regex(/^998[389][012345789][0-9]{7}$/),
		contact_date: Joi.string().trim().min(3).max(255), 
		contact_content: Joi.string().trim().min(3).max(255)
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}


const DELETE = (data) => {
	const schema = Joi.object({
		contact_id: Joi.number().required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

export default {
    GET_ONE,
	POST,
	PUT,
	DELETE
}
