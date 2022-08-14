const LOGIN  = `
    select 
        user_id,
        user_phone,
        user_full_name,
        user_password,
        user_role,
        user_profession_id,
        user_created_at,
        user_updated_at,
        user_deleted_at
    from users 
    where 
        user_deleted_at is null and 
        user_phone = $1 and 
        user_password = md5($2)
`

export default {
    LOGIN
}