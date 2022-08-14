import query from "#querys/blog_categories.Query"
import db from "#config/db"

const GET_ONE = async ({ profession_id }) => {
	const [ profession ] = await db(query.GET_ONE, profession_id)
	return profession
}

const GET = async () => {
	const professions = await db(query.GET)
	return professions
}

const POST = async ({profession_name}) => {
	const [ profession ] = await db(query.POST, profession_name)
	return profession
}

const PUT = async ( { profession_name, profession_id } ) => {
	const [ profession ] = await db(query.PUT, profession_name, profession_id)
	return profession
}

const DELETE= async ({ profession_id }) => {
	const [ profession ] = await db(query.DELETE, profession_id)
	return profession
}

const checkProfession = async ( { profession_name } ) => {
	const [ profession ] = await db(query.checkProfession, profession_name)
	return profession
}


export default {
    GET_ONE,
	GET,
	POST,
	PUT,
	DELETE,
	checkProfession
}