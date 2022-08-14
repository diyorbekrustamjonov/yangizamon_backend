import query from "#querys/disease_categories.Query"
import db from "#config/db"

const GET_ONE = async ({ disease_category_id }) => {
	const [ disease_category ] = await db(query.GET_ONE, disease_category_id)
	return disease_category
}

const GET = async () => {
	const disease_categories = await db(query.GET)
	return disease_categories
}

const POST = async ({disease_category_name}) => {
	console.log(disease_category_name)
	const [ disease_category ] = await db(query.POST, disease_category_name)
	return disease_category
}

const PUT = async ( { disease_category_name, disease_category_id } ) => {
	const [ disease_category ] = await db(query.PUT, disease_category_name, disease_category_id)
	return disease_category
}

const DELETE= async ({ disease_category_id }) => {
	const [ disease_category ] = await db(query.DELETE, disease_category_id)
	return disease_category
}

const checkDiseaseCategory = async ( { disease_category_name } ) => {
	const [ disease_category ] = await db(query.checkDiseaseCategory, disease_category_name)
	return disease_category
}


export default {
    GET_ONE,
	GET,
	POST,
	PUT,
	DELETE,
	checkDiseaseCategory
}