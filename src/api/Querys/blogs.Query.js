const GET_ONE  = `
    select 
        blog_user_id,
        blog_id,
        blog_title,
        blog_content,
        blog_image,
        blog_category_id,
        blog_created_at,
        blog_updated_at,
        blog_deleted_at
    from blogs 
    where 
        blog_deleted_at is null and 
        blog_id = $1::int
`

const GET  = `
    select 
        blog_user_id,
        blog_id,
        blog_title,
        blog_content,
        blog_image,
        blog_category_id,
        blog_created_at,
        blog_updated_at,
        blog_deleted_at
    from blogs
    where 
        blog_deleted_at is null 
`

const checkUserId = `
    select 
        user_id,
        user_phone,
        user_full_name,
        user_password,
        user_role,
        user_image,
        user_profession_id,
        user_created_at,
        user_updated_at,
        user_deleted_at
    from users 
    where user_deleted_at is null and user_id = $1::int
`

const checkCategoryId = `
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

const POST = `
    insert into blogs (
        blog_user_id,
        blog_title,
        blog_content,
        blog_image,
        blog_category_id
    ) values 
    (
        $1::int,
        $2::text,
        $3::text,
        $4::text,
        $5::int
    )
    returning *
`


const PUT = `
    update blogs set
        blog_user_id = (
            case when $2::int is not null then $2::int else blog_user_id end
        ),
        blog_title = (
            case when $3::text is not null then $3::text else blog_title end
        ),
        blog_content = (
            case when $4::text is not null then $4::text else blog_content end
        ),
        blog_image = (
            case when $5::text is not null then $5::text else blog_image end
        ),
        blog_category_id = (
            case when $6::int is not null then $6::int else blog_category_id end
        ),
        blog_updated_at = now()
    where blog_id = $1::int and blog_deleted_at is null
    returning *
`

const DELETE = `
    update blogs set blog_deleted_at = now() 
    where blog_id = $1::int and blog_deleted_at is null
    returning *
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE,
    checkUserId,
    checkCategoryId
}