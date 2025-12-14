-- TODO
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE orders (
  id serial PRIMARY KEY,
  date date NOT NULL,
  note text,
  user_id int NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE orders_products (
orders_id int PRIMARY KEY,
product_id int PRIMARY KEY,
quantity int NOT NULL
);

CREATE TABLE products (
  id serial PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  price decimal NOT NULL
);
