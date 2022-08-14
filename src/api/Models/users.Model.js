import query from "#querys/users.Query"
import db from "#config/db"

const GET_ONE = async ({ user_id }) => {
	const [ user ] = await db(query.GET_ONE, user_id)
	return user
}

const GET = async () => {
	const users = await db(query.GET)
	return users
}

const checkUser = async ({user_phone}) => {
	const [ user ] = await db(query.checkUser, user_phone)
	return user
}

const checkProfession = async ({user_profession_id}) => {
	const [ profession ] = await db(query.checkProfession, user_profession_id)
	return profession
}

const POST = async ({user_phone, user_password, user_full_name, user_image, user_role, user_profession_id}) => {
	const [ user ] = await db(query.POST, user_phone, user_password, user_full_name, user_image, user_role, user_profession_id)
	return user
}

const PUT = async ({user_id, user_phone, user_password, user_full_name, user_image, user_role, user_profession_id}) => {
	const [ user ] = await db(query.PUT, user_id, user_phone, user_password, user_full_name, user_image, user_role, user_profession_id)
	return user
}

const DELETE = async ({user_id}) => {
	const [ user ] = await db(query.DELETE, user_id)
	return user
}


export default {
    GET_ONE,
	GET,
	checkUser,
	checkProfession,
	POST,
	PUT,
	DELETE
}