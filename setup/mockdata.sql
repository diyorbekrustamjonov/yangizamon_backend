-- insert professions table 
insert into professions (profession_name) values
('Admin'),
('Doctor');


-- insert users table 
insert into users (user_phone, user_full_name, user_password, user_image, user_role, user_profession_id) values
('998992312433', 'Diyorbek Rustamjonov', '21232f297a57a5a743894a0e4a801fc3', 'diyorbek.jpg', 'admin', 1),
('998977101030', 'Abdurahmon Shohusniddinov', 'f9f16d97c90d8c6f2cab37bb6d1f1992', 'abdurahmon.jpg', 'doctor', 2);


-- insert blog_categories table
insert into blog_categories (blog_category_name) values
('Kasalliklar'),
('Alomatlar'),
('Davolash'),
('Oldini olish');

-- insert blog table
insert into blogs(blog_user_id, blog_title, blog_content, blog_image, blog_category_id) values
(1, 'Qanday qilib oyoq ogrigidan qutilish mumkin', 'Oyoq og"rig"i pastki tana oxirlari kasalliklari tufayli kelib chiqadigan alomatlarning birlashmasidir', 'oyog-ogrigi.jpg', 1),
(2, 'Qandey qilib bosh ogrigidan qutilish mumkin', 'Bosh og"riq hissi ko"rinishida namoyon bo"ladi. Ular o"tkir yoki tortuvchi tabiatli og"riq hissi ko"rinishida namoyon bo"ladi.', 'bosh-ogrigi.jpg', 2);


-- insert disease_categories table
insert into disease_categories (disease_category_name) values
('Kasalliklar yechimi'),
('Alomatlar yechimi'),
('Davolash usullari');

-- insert diseases table
insert into diseases (disease_category_id, disease_title, disease_content, disease_image) values
(1, 'Bosh ogrigidan qutilish!', 'Bir piyola shakar va tuz aralashtirib mazza qilib kola qilib iching', 'bosh-ogrigi.jpg'),
(2, 'Tish ogrigidan qutilish!', 'Tuzlik suvda tishingizni chayqang', 'tish-ogrigi.jpg');


-- insert sliders table
insert into sliders (slider_id, slider_title, slider_image, slider_link ) values 
(1, 'Biz sizga ishonishingiz mumkin bo''lgan xizmatlarni taqdim etamiz!', 'bosh-ogrigi.jpg', 'https://yangizamon.uz');

-- insert prices table
insert into prices (price_title, price_cost, price_details) values
('Plastik jarrohlik', '3.000.000', '{
    "checks": {
        "lorem ipsum dorem": true,
        "Cubitur Sollicitudin Fentum": true,
        "Nullam Interdum Enim": false,
        "Donec Ultricies Metus":false
    }
}'),
('Tishlarni oqartirish', '1.500.000', '{"checks": {
    "lorem ipsum dorem": true,
    "Cubitur Sollicitudin Fentum": true,
    "Nullam Interdum Enim": false,
    "Donec Ultricies Metus":false
}}');


-- insert testimonials table
insert into testimonials (testimonial_user_id, testimonial_content) values 
(2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');




-- insert departments table
insert into departments (department_title, department_icon, department_image, department_content, department_details) values
('Kardiologiya', 'icofont-heart-beat', 'kardiologiya.jpg', 'Lorem ipsum', '{
    "text": [
        "Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus."
    ],
    "checks": [
        "Maecenas pharetra ante vel est lobortis",
        "Maecenas pharetra ante vel est lobortis",
        "Maecenas pharetra ante vel est lobortis"
    ]
}');



-- insert contact table
insert into contacts (contact_department_id, contact_user_name, contact_user_phone, contact_date, contact_content) values
(1, 'Abror', '998992312433', '2020-01-01', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');