import query from "#querys/departments.Query"
import db from "#config/db"

const GET_ONE = async ({ department_id }) => {
	const [ disease ] = await db(query.GET_ONE, department_id)
	return disease
}

const GET = async () => {
	const departments = await db(query.GET)
	return departments
}
const POST = async ({department_title, department_icon, department_image, department_content, department_details}) => {
	const [ department ] = await db(query.POST, department_title, department_icon, department_image, department_content, JSON.stringify(department_details))
	return department
}

const PUT = async ({ department_id, department_title, department_icon, department_image, department_content, department_details}) => {
	const [ department ] = await db(query.PUT, department_id, department_title, department_icon, department_image, department_content, department_details)
	return department
}

const DELETE = async ({department_id}) => {
	const [ department ] = await db(query.DELETE, department_id)
	return department
}


export default {
    GET_ONE,
	GET,
	POST,
	PUT,
	DELETE
}