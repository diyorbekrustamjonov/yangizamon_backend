const GET_ONE  = `
    select 
        contact_id,
        contact_department_id,
        contact_user_name,
        contact_user_phone,
        contact_date,
        contact_content,
        contact_created_at,
        contact_updated_at,
        contact_deleted_at
    from contacts 
    where 
        contact_deleted_at is null and 
        contact_id = $1::int
`

const GET  = `
    select 
        contact_id,
        contact_department_id,
        contact_user_name,
        contact_user_phone,
        contact_date,
        contact_content,
        contact_created_at,
        contact_updated_at,
        contact_deleted_at
    from contacts 
    where 
        contact_deleted_at is null 
`

const POST  = `
    insert into contacts (contact_department_id, contact_user_name, contact_user_phone, contact_date, contact_content) values
    ($1::int, $2::text, $3::text, $4::text, $5::text)
    returning *
`

const PUT = `
    update contacts set 
        contact_department_id = (
            case when $2::int is null then contact_department_id else $2::int end
        ),
        contact_user_name = (
            case when $3::text is null then contact_user_name else $3::text end
        ),
        contact_user_phone = (
            case when $4::text is null then contact_user_phone else $4::text end
        ),
        contact_date = (
            case when $5::text is null then contact_date else $5::text end
        ),
        contact_content = (
            case when $6::text is null then contact_content else $6::text end
        ),
        contact_updated_at = now()
    where contact_id = $1::int and contact_deleted_at is null 
    returning *
`;

const DELETE = `
    update contacts set
        contact_deleted_at = now()
    where contact_id = $1::int and contact_deleted_at is null
    returning *
`

const checkDepartmentId = `
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
    where department_deleted_at is null and department_id = $1::int
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE,
    checkDepartmentId   
}