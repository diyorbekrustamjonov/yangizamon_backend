/* 

    ------------------AUTH------------------
    POST: /auth/login
        {
            user_phone: "99892312433",
            user_password: "admin"
        },
    RESPONSE: {
        status: 200, 
        message: "Has been logged",
        token: ????
    }

    ------------------USERS------------------
    GET: /users
    RESPONSE: [
                    {
                    "user_id": 1,
                    "user_phone": "998992312433",
                    "user_full_name": "Diyorbek Rustamjonov",
                    "user_password": "21232f297a57a5a743894a0e4a801fc3",
                    "user_image": "http://localhost:3000/images/users/admin.png",
                    "user_role": "admin",
                    "user_profession_id": 1,
                    "user_created_at": "2022-05-29T23:36:48.728Z",
                    "user_updated_at": null,
                    "user_deleted_at": null
                    }
            ]
            
*/