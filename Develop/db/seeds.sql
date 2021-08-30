INSERT INTO departments (department_name)
VALUES 
    ("IT"),
    ("Finance"),
    ("Advertising"),
    ("Sales")
;

INSERT INTO roles (id, title, salary)
VALUES 
    (1, "Relations Manager", "70000"),
    (2, "Secretary", "40000"),
    (3, "Designer", "75000"),
    (4, "Salesperson", "60000")
;

UPDATE roles
SET id=LPAD(FLOOR(RAND() * 999999.99), 6, '0');

INSERT INTO employees (id, first_name, last_name, manager_id)
VALUES 
    (1, "Jen", "Barber", 1),
    (2, "Charlie", "Smith", NULL),
    (3, "Izzy", "Yazzie", NULL),
    (4, "Nelly", "Jones", NULL)
;

UPDATE employees
SET id=LPAD(FLOOR(RAND() * 999999.99), 6, '0');