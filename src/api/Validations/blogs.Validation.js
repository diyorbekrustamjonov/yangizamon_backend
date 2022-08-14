import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		blog_id: Joi.number().required()
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
		blog_user_id: Joi.number().required(),
        blog_title: Joi.string().trim().min(3).max(255).required(),
        blog_content: Joi.string().trim().min(3).max(500).required(),
        blog_image: Joi.object().required(),
        blog_category_id: Joi.number().required()
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
		blog_id: Joi.number().required(),
		blog_user_id: Joi.number(),
        blog_title: Joi.string().trim().min(3).max(255),
        blog_content: Joi.string().trim().min(3).max(500),
        blog_image: Joi.object(),
        blog_category_id: Joi.number()
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
		blog_id: Joi.number().required()
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
