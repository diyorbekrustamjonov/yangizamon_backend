import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		user_id: Joi.number().required()
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
		user_phone: Joi.string().trim().regex(/^998[389][012345789][0-9]{7}$/).required(),
		user_password: Joi.string().trim().min(3).max(255).required(),
		user_full_name: Joi.string().trim().min(3).max(255).required(),
		user_image: Joi.object().required(),
		user_role: Joi.string().trim().min(3).max(255),
		user_profession_id: Joi.number().required()
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
		user_id: Joi.number().required(),
		user_phone: Joi.string().trim().regex(/^998[389][012345789][0-9]{7}$/),
		user_password: Joi.string().trim().min(3).max(255),
		user_full_name: Joi.string().trim().min(3).max(255),
		user_image: Joi.object(),
		user_role: Joi.string().trim().min(3).max(255),
		user_profession_id: Joi.number()
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
		user_id: Joi.number().required()
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
