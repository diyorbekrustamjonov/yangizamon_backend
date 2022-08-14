import query from "#querys/blog_categories.Query"
import db from "#config/db"

const GET_ONE = async ({ blog_category_id }) => {
	const [ blog_category ] = await db(query.GET_ONE, blog_category_id)
	return blog_category
}

const GET = async () => {
	const blog_categories = await db(query.GET)
	return blog_categories
}

const POST = async ({blog_category_name}) => {
	console.log(blog_category_name)
	const [ blog_category ] = await db(query.POST, blog_category_name)
	return blog_category
}

const PUT = async ( { blog_category_name, blog_category_id } ) => {
	const [ blog_category ] = await db(query.PUT, blog_category_name, blog_category_id)
	return blog_category
}

const DELETE= async ({ blog_category_id }) => {
	const [ blog_category ] = await db(query.DELETE, blog_category_id)
	return blog_category
}

const checkBlogCategory = async ( { blog_category_name } ) => {
	const [ blog_category ] = await db(query.checkBlogCategory, blog_category_name)
	return blog_category
}


export default {
    GET_ONE,
	GET,
	POST,
	PUT,
	DELETE,
	checkBlogCategory
}