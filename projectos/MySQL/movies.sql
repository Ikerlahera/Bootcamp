DROP DATABASE IF EXISTS iker;
CREATE DATABASE IF NOT EXISTS iker;

USE iker;
CREATE TABLE IF NOT EXISTS movies(
id INT PRIMARY KEY auto_increment,
title varchar(100),
año INT,
image_url varchar(255),
certificate varchar(45),
runtime int,
imdb_rating FLOAT,
descripcion TEXT,
metascore int,
votes int,
gross int
);

CREATE TABLE IF NOT EXISTS directors(
id INT PRIMARY KEY auto_increment,
name varchar(45),
about TEXT
);

CREATE TABLE IF NOT EXISTS stars(
id INT PRIMARY KEY auto_increment,
name varchar(45),
about TEXT
);

CREATE TABLE IF NOT EXISTS genres(
id INT PRIMARY KEY auto_increment,
name varchar(45)
);

CREATE TABLE IF NOT EXISTS movies_directors(
movies_id INT NOT NULL,
directors_id INT NOT NULL,
primary key (movies_id, directors_id),
foreign key (movies_id) references movies(id),
foreign key (directors_id) references directors(id)
);

CREATE TABLE IF NOT EXISTS movies_stars(
movies_id int NOT NULL,
stars_id int NOT NULL,
primary key (movies_id, stars_id),
foreign key (movies_id) references movies(id),
foreign key (stars_id) references stars(id)
);

CREATE TABLE IF NOT EXISTS movies_genres(
movies_id INT NOT NULL,
genres_id INT NOT NULL,
primary key (movies_id, genres_id),
foreign key (movies_id) references movies(id),
foreign key (genres_id) references genres(id)
);