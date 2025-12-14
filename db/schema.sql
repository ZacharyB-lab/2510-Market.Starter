-- TODO
table users {
  id serial [pk]
  username text [unique, not null]
  password text [not null]
}

table orders {
  id serial [pk]
  date date [not null]
  note text
  user_id int [not null]
}

table orders_products {
  order_id int [not null]
  product_id int [not null]
  quantity int [not null]

  indexes {
    (order_id, product_id) [pk]
  }
}

table products {
  id serial [pk]
  title text [not null]
  description text [not null]
  price decimal [not null]
}

Ref: users.id < orders.user_id [delete: cascade]
Ref: orders.id < orders_products.order_id [delete: cascade]
Ref: products.id < orders_products.product_id [delete: cascade]