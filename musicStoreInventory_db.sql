DROP DATABASE IF EXISTS bamazon_db;
 
CREATE DATABASE IF NOT EXISTS  bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT UNSIGNED NOT NULL AUTO_INCREMENT
, product_name VARCHAR(50) NOT NULL
, department_name VARCHAR (50)
, price INT 
, stock_quantity INT
,PRIMARY KEY (item_id)
);	

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Gibson SG Guitar", "Instrument",  1500.00, 15)

 ,("Fender Startocaster", "Instrument",  1200.00, 10)

 ,("Fender Telecaster", "Instrument",  1350.00, 5)

 ,("How To Not Suck at Music", "Books",  35.00, 5)

 ,("Stevie Ray Vaughn Live in Concert", "Movies",  25.00, 8)

 ,("Redbull", "Drinks",  3.00, 30)

 ,("M$Ms", "Food",  1.00, 5)

 ,("Peral Drumset", "Instrument",  900.00, 5)

 ,("sennheiser Vintage Microphone", "Audio",  20.00, 9)

 ,("Audio Interface", "Audio",  200.00, 5)

 ,("Shure 215 In Ears", "Audio",  112.00, 7);

SELECT * FROM products;



