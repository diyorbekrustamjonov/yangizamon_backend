const GET_ONE  = `
    select 
        user_id,
        user_phone,
        user_full_name,
        user_password,
        user_image,
        user_role,
        user_profession_id,
        p.profession_name,
        user_created_at,
        user_updated_at,
        user_deleted_at
    from users 
    left join professions p on p.profession_id = users.user_profession_id
    where 
        user_deleted_at is null and 
        user_id = $1::int
`

const GET  = `
    select 
        user_id,
        user_phone,
        user_full_name,
        user_password,
        user_image,
        user_role,
        user_profession_id,
        p.profession_name,
        user_created_at,
        user_updated_at,
        user_deleted_at
    from users 
    left join professions p on p.profession_id = users.user_profession_id
    where 
        user_deleted_at is null 
`

const checkUser = `
    select 
        user_id,
        user_phone,
        user_full_name,
        user_password,
        user_image,
        user_role,
        user_profession_id,
        user_created_at,
        user_updated_at,
        user_deleted_at
    from users 
    where user_deleted_at is null and user_phone = $1::text
`
const checkProfession = `
    select 
        profession_id,
        profession_name,
        profession_created_at,
        profession_updated_at,
        profession_deleted_at
    from professions
    where profession_deleted_at is null and profession_id = $1::int
`

const POST = `
    insert into users (user_phone, user_password, user_full_name, user_image, user_role, user_profession_id) values 
    (
        $1::text,
        md5($2::text), 
        $3::text, 
        $4::text, 
        $5::text, 
        $6::int
    )
    returning *
`


const PUT = `
    update users set
        user_phone = (
            case when $2::text is not null then $2::text else user_phone end
        ),
        user_password = (
            case when $3::text is not null then md5($3::text) else user_password end
        ),
        user_full_name = (
            case when $4::text is not null then $4::text else user_full_name end
        ),
        user_image = (
            case when $5::text is not null then $5::text else user_image end
        ),
        user_role = (
            case when $6::text is not null then $6::text else user_role end
        ),
        user_profession_id = (
            case when $7::int is not null then $7::int else user_profession_id end
        ),
        user_updated_at = now()
    where user_id = $1::int and user_deleted_at is null
    returning *
`

const DELETE = `
    update users set user_deleted_at = now() 
    where user_id = $1::int and user_deleted_at is null
    returning *
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE,
    checkUser,
    checkProfession
}