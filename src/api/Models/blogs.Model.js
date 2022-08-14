import query from "#querys/blogs.Query"
import db from "#config/db"

const GET_ONE = async ({ blog_id }) => {
	const [ blog ] = await db(query.GET_ONE, blog_id)
	return blog
}

const GET = async () => {
	const blogs = await db(query.GET)
	return blogs
}
const POST = async ({blog_user_id, blog_title, blog_content, blog_image, blog_category_id}) => {
	const [ blog ] = await db(query.POST, blog_user_id, blog_title, blog_content, blog_image, blog_category_id)
	return blog
}

const PUT = async ({ blog_id, blog_user_id, blog_title, blog_content, blog_image, blog_category_id}) => {
	const [ blog ] = await db(query.PUT, blog_id, blog_user_id, blog_title, blog_content, blog_image, blog_category_id)
	return blog
}

const DELETE = async ({blog_id}) => {
	const [ blog ] = await db(query.DELETE, blog_id)
	return blog
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