import query from "#querys/auth.Query"
import db from "#config/db"

const LOGIN = async ({user_phone, user_password}) => {
	const [ user ] = await db(query.LOGIN, user_phone, user_password)
	return user
}

export default {
    LOGIN
}