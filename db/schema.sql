DROP DATABASE IF EXISTS donut_db;

CREATE DATABASE donut_db;


USE donut_db;

CREATE TABLE donuts(
    id INT auto_increment NOT NULL,
    donut_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);