--create DATABASE
CREATE DATABASE crud_teste;

--using the database
use crud_teste;

--create table
CREATE TABLE IF NOT EXISTS usuario (
UserID int (11) not null AUTO_INCREMENT PRIMARY KEY,
Nomeusuario varchar(50) not null,
Idade int (3) not null,
UF varchar(2) not null,
);

--show all tables
SHOW TABLES;

--describe the table
describe usuario;