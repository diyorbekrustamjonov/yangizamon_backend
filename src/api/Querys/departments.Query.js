const GET_ONE  = `
    select 
        department_id,
        department_title,
        department_icon,
        department_image,
        department_content,
        department_details,
        department_created_at,
        department_updated_at,
        department_deleted_at
    from departments 
    where 
        department_deleted_at is null and 
        department_id = $1::int
`

const GET  = `
    select 
        department_id,
        department_title,
        department_icon,
        department_image,
        department_content,
        department_details,
        department_created_at,
        department_updated_at,
        department_deleted_at
    from departments
    where 
        department_deleted_at is null 
`

const POST = `
    insert into departments (
        department_title,
        department_icon,
        department_image,
        department_content,
        department_details
    ) values (
        $1::text,
        $2::text,
        $3::text,
        $4::text,
        $5::json
    )
    returning *
`


const PUT = `
    update departments set
        department_title = (
            case when $2::text is not null then $2::text else department_title end
        ),
        department_icon = (
            case when $3::text is not null then $3::text else department_icon end
        ),
        department_image = (
            case when $4::text is not null then $4::text else department_image end
        ),
        department_content = (
            case when $5::text is not null then $5::text else department_content end
        ),
        department_details = (
            case when $6::json is not null then $6::json else department_details end
        ),
        department_updated_at = now()
    where department_id = $1::int and department_deleted_at is null
    returning *
`

const DELETE = `
    update departments set department_deleted_at = now() 
    where department_id = $1::int and department_deleted_at is null
    returning *
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE
}