-- Creating database
CREATE DATABASE crudnodejsmysql;

-- Using the database
use crudnodejsmysql;

-- Creating a table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(11)
);

-- To show all tables
SHOW TABLES;

-- To Describe the table
describe customer;