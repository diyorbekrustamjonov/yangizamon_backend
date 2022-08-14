const GET_ONE  = `
    select 
        disease_user_id,
        disease_id,
        disease_title,
        disease_content,
        disease_image,
        disease_category_id,
        disease_created_at,
        disease_updated_at,
        disease_deleted_at
    from diseases 
    where 
        disease_deleted_at is null and 
        disease_id = $1::int
`

const GET  = `
    select 
        disease_user_id,
        disease_id,
        disease_title,
        disease_content,
        disease_image,
        disease_category_id,
        disease_created_at,
        disease_updated_at,
        disease_deleted_at
    from diseases
    where 
        disease_deleted_at is null 
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
        disease_category_id,
        disease_category_name,
        disease_category_created_at,
        disease_category_updated_at,
        disease_category_deleted_at
    from disease_categories 
    where 
        disease_category_deleted_at is null and 
        disease_category_id = $1::int
`

const POST = `
    insert into diseases (
        disease_user_id,
        disease_title,
        disease_content,
        disease_image,
        disease_category_id
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
    update diseases set
        disease_user_id = (
            case when $2::int is not null then $2::int else disease_user_id end
        ),
        disease_title = (
            case when $3::text is not null then $3::text else disease_title end
        ),
        disease_content = (
            case when $4::text is not null then $4::text else disease_content end
        ),
        disease_image = (
            case when $5::text is not null then $5::text else disease_image end
        ),
        disease_category_id = (
            case when $6::int is not null then $6::int else disease_category_id end
        ),
        disease_updated_at = now()
    where disease_id = $1::int and disease_deleted_at is null
    returning *
`

const DELETE = `
    update diseases set disease_deleted_at = now() 
    where disease_id = $1::int and disease_deleted_at is null
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