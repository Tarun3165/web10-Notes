show databases;

SELECT DATABASE();

create table authors ( id integer auto_increment primary key, First_Name VARCHAR(20), Last_Name VARCHAR(20) ); 

insert into authors (First_Name, Last_Name) values ('Tarun','Rawat'),('Aman','Singh'),('sumit','Kumar');

create table posts ( id integer auto_increment primary key, title VARCHAR(200), content VARCHAR(400), time VARCHAR(20), author_id integer not null, foreign key (author_id) REFERENCES authors(id) on delete cascade);

insert into posts (title, content, time, author_id) values ('What is difference between SQL and MySQL?','SQL is a query language, whereas MySQL is a relational database that uses SQL to query a database. You can use SQL to access, update, and manipulate the data stored in a database. ... SQL is used for writing queries for databases, MySQL facilitates data storing, modifying, and management in a tabular format','11:05pm', 1 ); 

insert into posts (title, content, time, author_id) values ('What is SQL and how is it used?','SQL is a database computer language designed for the retrieval and management of data in a relational database. SQL stands for Structured Query Language...','11:00pm', 1 );

insert into posts (title, content, time, author_id) values ("What is Express used for?","The primary use of Express is to provide server-side logic for web and mobile applications and as such it's used all over the place.","11:10pm", 2 );

insert into posts (title, content, time, author_id) values ("Is MongoDB better than SQL?","MongoDB offers faster query processing but with an increased load and system requirements. Without knowing the purpose of use, it is not possible to classify SQL Databases or NoSQL Databases like MongoDB as better or worse than the other.","11:15pm", 3 );

create table tags ( id integer auto_increment primary key, tag VARCHAR(20) );

insert into tags (tag) values (' mysql'),('sql '),(' express'),(' monogodb');
    
create table comments (id integer auto_increment primary key, comment VARCHAR(200),post_id  integer not null,foreign key (post_id) REFERENCES posts(id) on delete cascade); 

drop table comments;

insert into comments  (comment,post_id) values ("SQL stands for Structured Query Language, which is a programming language used to communicate with relational databases ",1),("Express is a perfect choice for a server when it comes to creating and exposing APIs ",3),("MongoDB, unfortunately, does not support transactions.",4);

create table post_tags ( post_id  integer not null,tag_id  integer not null,foreign key (post_id) REFERENCES posts(id) on  delete cascade,foreign key (tag_id) REFERENCES tags(id) on delete cascade);

drop table post_tags;

insert into post_tags  (post_id,tag_id) values (1,1),(1,2),(2,1),(3,3),(4,4),(4,2);  

create table tags (id integer auto_increment primary key, tag VARCHAR(20));

insert into tags  (tag) values (' mysql'),('sql '),(' express'),(' Monogodb');  

drop table tags;

UPDATE blog.tags set tag ="mongodb" where id =4;

ALTER table post_tags drop constraint post_tags_ibfk_1;

ALTER table post_tags drop constraint post_tags_ibfk_1;

drop table posts;

ALTER table posts drop constraint comments_ibfk_1;

ALTER table comments drop constraint comments_ibfk_1;

delete from authors where id=1;

delete from posts where id=1;

delete from authors where id=2;



