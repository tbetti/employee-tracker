INSERT INTO departments (department_name)
VALUES 
    ("IT"),
    ("Finance"),
    ("Advertising"),
    ("Sales")
;

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Relations Manager", "70000", 4),
    ("Secretary", "40000", 2),
    ("Designer", "75000", 4),
    ("Salesperson", "60000", 1)
;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jen", "Barber", 1, NULL),
    ("Charlie", "Smith", 2, NULL),
    ("Izzy", "Yazzie", 3, NULL),
    ("Nelly", "Jones", 4, NULL)
;