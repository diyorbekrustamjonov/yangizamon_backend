import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		depart: Joi.number().required()
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
        department_title: Joi.string().trim().min(3).max(255).required(),
        department_icon: Joi.string().trim().min(3).max(25).required(),
        department_image: Joi.object().required(),
        department_content: Joi.string().trim().min(3).max(500).required(),
        department_details: Joi.string().required()
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
		department_id: Joi.number().required(),
        department_title: Joi.string().trim().min(3).max(255),
        department_icon: Joi.string().trim().min(3).max(25),
        department_image: Joi.object(),
        department_content: Joi.string().trim().min(3).max(500),
        department_details: Joi.string()
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
		department_id: Joi.number().required()
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
