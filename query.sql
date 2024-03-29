
CREATE Table users(
id VARCHAR PRIMARY KEY,
email VARCHAR NOT NULL,
password VARCHAR NOT NULL,
fullName VARCHAR,
role VARCHAR
);


INSERT INTO users(id,email,password,fullName,role) VALUES('1','sri2000@gmail.com','12345','sri-yuniar','admin');
SELECT * FROM users WHERE email='namaemail@gmail.com';


CREATE TABLE addProducts(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    stock INT,
    price INT,
    categorys_id INT REFERENCES categorys(id)
);


CREATE TABLE myBag(
    id SERIAL PRIMARY KEY,
    products_id INT REFERENCES products(id),
    categorys_id INT REFERENCES categorys(id),
    user_id VARCHAR(255) REFERENCES users(id)
);
ALTER TABLE myBag ADD statusOrder VARCHAR;
CREATE TABLE checkout(
    id SERIAL PRIMARY KEY,
    products_id INT REFERENCES products(id),
    categorys_id INT REFERENCES categorys(id),
    user_id VARCHAR(255) REFERENCES users(id),
    status INT
);
ALTER TABLE checkout ADD user_idToko VARCHAR REFERENCES products(users_id);
ALTER TABLE checkout ADD count INT;
SELECT checkout.id,products.id as products_id,products.name as products_name,products.users_id as user_idtoko,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,users.id as user_id,users.fullname as user_name,checkout.status,checkout.statusPayment,checkout.count FROM checkout
INNER JOIN products ON checkout.products_id = products.id
INNER JOIN categorys ON checkout.categorys_id = categorys.id
INNER JOIN users ON checkout.user_id = users.id;

SELECT myBag.id,products.id as products_id,products.name as products_name,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,users.id as user_id,users.fullname as user_name,myBag.count FROM mybag
INNER JOIN products ON myBag.products_id = products.id
INNER JOIN categorys ON myBag.categorys_id = categorys.id
INNER JOIN users ON myBag.user_id = users.id;


ALTER TABLE addProducts ADD photo VARCHAR(255);
ALTER TABLE addProducts ADD user_id VARCHAR(255) REFERENCES users(id);

SELECT addProducts.name,addProducts.stock,addProducts.price,categorys.categorys as categorys,users.fullname as user_id
FROM addProducts 
INNER JOIN categorys ON addProducts.categorys_id = categorys.id
INNER JOIN users ON addProducts.user_id = users.id;







====ini data baru

CREATE Table users(
id VARCHAR PRIMARY KEY,
email VARCHAR NOT NULL,
password VARCHAR NOT NULL,
fullName VARCHAR,
role VARCHAR,
adress VARCHAR,
photo VARCHAR,
gender VARCHAR,
phoneNumber VARCHAR,
verif INT,
otp INT
);

CREATE TABLE categorys(id SERIAL PRIMARY KEY,categorys VARCHAR NOT NULL);

INSERT INTO categorys(id,categorys) VALUES(1,'t_shirt'),(2,'soes'),(3,'jacket'),(4,'short'),(5,'pants');

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    stock INT,
    price INT,
    categorys_id INT REFERENCES categorys(id),
    photo VARCHAR,
    users_id VARCHAR REFERENCES users(id),
    active INT
);

CREATE TABLE checkout(
    id SERIAL PRIMARY KEY,
    products_id INT REFERENCES products(id),
    categorys_id INT REFERENCES categorys(id),
    user_id VARCHAR(255) REFERENCES users(id),
    statusPayment INT,
    count INT,
    status VARCHAR
);

CREATE TABLE myBag(
    id SERIAL PRIMARY KEY,
    products_id INT REFERENCES products(id),
    categorys_id INT REFERENCES categorys(id),
    user_id VARCHAR(255) REFERENCES users(id),
    count INT,
    status INT,
    statusOrder VARCHAR
);