const GET_ONE  = `
    select 
        profession_id,
        profession_name,
        profession_created_at,
        profession_updated_at,
        profession_deleted_at
    from professions 
    where 
        profession_deleted_at is null and 
        profession_id = $1::int
`

const GET  = `
    select 
        profession_id,
        profession_name,
        profession_created_at,
        profession_updated_at,
        profession_deleted_at
    from professions 
    where 
        profession_deleted_at is null 
`

const POST  = `
    insert into professions (profession_name) values
    ($1::text)
    returning *
`
const PUT = `
    update professions set 
        profession_name = (
            case when $1::text is not null then $1::text else profession_name end
        ) 
    where profession_id = $2::int and profession_deleted_at is null 
    returning *
`;

const DELETE = `
    update professions set
        profession_deleted_at = now()
    where profession_id = $1::int and profession_deleted_at is null
    returning *
`

const checkProfession = `
    select 
        profession_id,
        profession_name,
        profession_created_at,
        profession_updated_at,
        profession_deleted_at
    from professions
    where profession_deleted_at is null and profession_name = $1::text
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE,
    checkProfession
}