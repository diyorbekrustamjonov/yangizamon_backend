import Joi from "joi"

const LOGIN = (data) => {
	const schema = Joi.object({
		user_phone: Joi.string().trim().regex(/^998[389][012345789][0-9]{7}$/).required(),
		user_password: Joi.string().trim().min(3).max(255).required()
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
    LOGIN
}