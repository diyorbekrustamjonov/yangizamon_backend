const GET_ONE  = `
    select 
        blog_category_id,
        blog_category_name,
        blog_category_created_at,
        blog_category_updated_at,
        blog_category_deleted_at
    from blog_categories 
    where 
        blog_category_deleted_at is null and 
        blog_category_id = $1::int
`

const GET  = `
    select 
        blog_category_id,
        blog_category_name,
        blog_category_created_at,
        blog_category_updated_at,
        blog_category_deleted_at
    from blog_categories 
    where 
        blog_category_deleted_at is null 
`

const POST  = `
    insert into blog_categories (blog_category_name) values
    ($1::text)
    returning *
`
const PUT = `
    update blog_categories set 
        blog_category_name = (
            case when $1::text is not null then $1::text else blog_category_name end
        ) 
    where blog_category_id = $2::int and blog_category_deleted_at is null 
    returning *
`;

const DELETE = `
    update blog_categories set
        blog_category_deleted_at = now()
    where blog_category_id = $1::int and blog_category_deleted_at is null
    returning *
`

const checkBlogCategory = `
    select 
        blog_category_id,
        blog_category_name,
        blog_category_created_at,
        blog_category_updated_at,
        blog_category_deleted_at
    from blog_categories
    where blog_category_deleted_at is null and blog_category_name = $1::text
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE,
    checkBlogCategory   
}