const GET_ONE  = `
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

const GET  = `
    select 
        disease_category_id,
        disease_category_name,
        disease_category_created_at,
        disease_category_updated_at,
        disease_category_deleted_at
    from disease_categories 
    where 
        disease_category_deleted_at is null 
`

const POST  = `
    insert into disease_categories (disease_category_name) values
    ($1::text)
    returning *
`
const PUT = `
    update disease_categories set 
        disease_category_name = (
            case when $1::text is not null then $1::text else disease_category_name end
        ) 
    where disease_category_id = $2::int and disease_category_deleted_at is null 
    returning *
`;

const DELETE = `
    update disease_categories set
        disease_category_deleted_at = now()
    where disease_category_id = $1::int and disease_category_deleted_at is null
    returning *
`

const checkDiseaseCategory = `
    select 
        disease_category_id,
        disease_category_name,
        disease_category_created_at,
        disease_category_updated_at,
        disease_category_deleted_at
    from disease_categories
    where disease_category_deleted_at is null and disease_category_name = $1::text
`

export default {
    GET_ONE,
    GET,
    POST,
    PUT,
    DELETE,
    checkDiseaseCategory   
}