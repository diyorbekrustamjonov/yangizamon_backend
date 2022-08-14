import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		disease_id: Joi.number().required()
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
		disease_user_id: Joi.number().required(),
        disease_title: Joi.string().trim().min(3).max(255).required(),
        disease_content: Joi.string().trim().min(3).max(500).required(),
        disease_image: Joi.object().required(),
        disease_category_id: Joi.number().required()
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
		disease_id: Joi.number().required(),
		disease_user_id: Joi.number(),
        disease_title: Joi.string().trim().min(3).max(255),
        disease_content: Joi.string().trim().min(3).max(500),
        disease_image: Joi.object(),
        disease_category_id: Joi.number()
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
		disease_id: Joi.number().required()
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
