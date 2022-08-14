-- Initialization (just copy and paste)

-- connect to another database 
\c postgres;

-- drop database if exists 
drop database if exists yangizamon_uz;

-- create database 
create database yangizamon_uz;

-- connect to databse look
\c yangizamon_uz;


-------------------------------------------------------------------------------------------


-- professions table
drop table if exists professions cascade;
create table professions(
    profession_id serial not null primary key,
    profession_name varchar(255) not null unique,
    profession_created_at timestamp default current_timestamp,
    profession_updated_at timestamp default null,
    profession_deleted_at timestamp default null
);


-- users table
drop table if exists users cascade;
create table users(
    user_id serial not null primary key,
    user_phone varchar(50) not null unique,
    user_full_name varchar(255) not null,
    user_password varchar(255) not null,
    user_role varchar(50) default 'doctor',
    user_image text default 'guest.png',
    user_profession_id serial not null references professions(profession_id) on delete cascade,
    user_created_at timestamp default current_timestamp,
    user_updated_at timestamp default null,
    user_deleted_at timestamp default null
);

-- blog categories table
drop table if exists blog_categories cascade;
create table blog_categories(
    blog_category_id serial not null primary key,
    blog_category_name varchar(255) not null unique,
    blog_category_created_at timestamp default current_timestamp,
    blog_category_updated_at timestamp default null,
    blog_category_deleted_at timestamp default null
); 

-- blog table 
drop table if exists blogs cascade;
create table blogs (
    blog_user_id serial not null references users(user_id) on delete cascade,
    blog_id serial not null primary key,
    blog_title varchar(255) not null,
    blog_content text not null,
    blog_image text not null,
    blog_category_id serial not null references blog_categories(blog_category_id) on delete cascade,
    blog_created_at timestamp default current_timestamp,
    blog_updated_at timestamp default null,
    blog_deleted_at timestamp default null
);

-- deasease categories table
drop table if exists disease_categories cascade;
create table disease_categories(
    disease_category_id serial not null primary key,
    disease_category_name varchar(255) not null unique,
    disease_category_created_at timestamp default current_timestamp,
    disease_category_updated_at timestamp default null,
    disease_category_deleted_at timestamp default null
);

-- disease table
drop table if exists diseases cascade;
create table diseases(
    disease_user_id serial not null references users(user_id) on delete cascade,
    disease_id serial not null primary key,
    disease_title varchar(255) not null unique,
    disease_content text not null,
    disease_image text not null,
    disease_category_id serial not null references disease_categories(disease_category_id) on delete cascade,
    disease_created_at timestamp default current_timestamp,
    disease_updated_at timestamp default null,
    disease_deleted_at timestamp default null
);

-- sliders table 
drop table if exists sliders cascade;
create table sliders (
    slider_id serial not null primary key,
    slider_title varchar(255) not null,
    slider_image text not null,
    slider_link text not null,
    slider_created_at timestamp default current_timestamp,
    slider_updated_at timestamp default null,
    slider_deleted_at timestamp default null
);

-- prices table
drop table if exists prices cascade;
create table prices(
    price_id serial not null primary key,
    price_title varchar(255) not null,
    price_cost text not null,
    price_details json not null,
    price_created_at timestamp default current_timestamp,
    price_updated_at timestamp default null,
    price_deleted_at timestamp default null
);

-- testimonials table
drop table if exists testimonials cascade;
create table testimonials(
    testimonial_user_id serial not null references users(user_id) on delete cascade,
    testimonial_id serial not null primary key,
    testimonial_content text not null,
    testimonial_created_at timestamp default current_timestamp,
    testimonial_updated_at timestamp default null,
    testimonial_deleted_at timestamp default null
);

-- departments table
drop table if exists departments cascade;
create table departments (
    department_id serial not null primary key,
    department_title varchar(255) not null,
    department_icon varchar(20) not null,
    department_image text not null,
    department_content text not null,
    department_details json not null,
    department_created_at timestamp default current_timestamp,
    department_updated_at timestamp default null,
    department_deleted_at timestamp default null
);


-- contact table
drop table if exists contacts cascade;
create table contacts(
    contact_id serial not null primary key,
    contact_department_id serial not null references departments(department_id) on delete cascade,
    contact_user_name varchar (255) not null,
    contact_user_phone varchar (255) not null,
    contact_date varchar(255) not null,
    contact_content varchar(500) not null,
    contact_created_at timestamp default current_timestamp,
    contact_updated_at timestamp default null,
    contact_deleted_at timestamp default null
);
