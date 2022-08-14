import query from "#querys/contacts.Query"
import db from "#config/db"

const GET_ONE = async ({ contact_id }) => {
	const [ contact ] = await db(query.GET_ONE, contact_id)
	return contact
}

const GET = async () => {
	const contacts = await db(query.GET)
	return contacts
}

const POST = async ({contact_department_id, contact_user_name, contact_user_phone, contact_date, contact_content}) => {
	const [ contact ] = await db(query.POST, contact_department_id, contact_user_name, contact_user_phone, contact_date, contact_content)
	return contact
}

const PUT = async ( { contact_id, contact_department_id, contact_user_name, contact_user_phone, contact_date, contact_content } ) => {
	const [ contact ] = await db(query.PUT,	contact_id, contact_department_id, contact_user_name, contact_user_phone, contact_date, contact_content )
	return contact
}

const DELETE= async ({ contact_id }) => {
	const [ contact ] = await db(query.DELETE, contact_id)
	return contact
}

const checkDepartmentId = async ( { contact_department_id } ) => {
	const [ department ] = await db(query.checkDepartmentId, contact_department_id)
	return department
}


export default {
    GET_ONE,
	GET,
	POST,
	PUT,
	DELETE,
	checkDepartmentId
}