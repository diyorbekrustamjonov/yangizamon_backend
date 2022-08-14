import query from "#querys/diseases.Query"
import db from "#config/db"

const GET_ONE = async ({ disease_id }) => {
	const [ disease ] = await db(query.GET_ONE, disease_id)
	return disease
}

const GET = async () => {
	const diseases = await db(query.GET)
	return diseases
}
const POST = async ({disease_user_id, disease_title, disease_content, disease_image, disease_category_id}) => {
	const [ disease ] = await db(query.POST, disease_user_id, disease_title, disease_content, disease_image, disease_category_id)
	return disease
}

const PUT = async ({ disease_id, disease_user_id, disease_title, disease_content, disease_image, disease_category_id}) => {
	const [ disease ] = await db(query.PUT, disease_id, disease_user_id, disease_title, disease_content, disease_image, disease_category_id)
	return disease
}

const DELETE = async ({disease_id}) => {
	const [ disease ] = await db(query.DELETE, disease_id)
	return disease
}

const checkCategoryId = async ({category_id}) => {
	const [ category ] = await db(query.checkCategoryId, category_id)
	return category
}

const checkUserId = async ({user_id}) => {
	const [ user ] = await db(query.checkUserId, user_id)
	return user
}

export default {
    GET_ONE,
	GET,
	POST,
	PUT,
	DELETE,
	checkCategoryId,
	checkUserId
}