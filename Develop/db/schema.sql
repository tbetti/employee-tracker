-- Create Database --
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create departments table --
DROP TABLE IF EXISTS departments;
CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- Create roles table --
DROP TABLE IF EXISTS roles;
CREATE TABLE roles(
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id) REFERENCES departments (id)
    ON DELETE SET NULL
);

-- Create employees table --
DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles (id)
    ON DELETE SET NULL
)