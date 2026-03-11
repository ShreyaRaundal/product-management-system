# product-management-system
Product listing with search and filter

# Product Management System

## Overview
This project is a Product Management System developed as part of a machine test.  
It allows users to manage products with features like listing products, searching by name, filtering by category, adding new products, deleting products, and pagination.

The application follows a full-stack architecture with a Node.js backend, MySQL database, and a simple frontend UI built with HTML, CSS, and JavaScript.

---

## Features

- View all products
- Search products by name
- Filter products by category
- Add new product
- Delete product
- Pagination for product listing

---

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MySQL

Tools:
- Git
- GitHub

---




---

## Database Schema

Table: products

| Column | Type |
|------|------|
| id | INT (Primary Key, Auto Increment) |
| name | VARCHAR |
| price | DECIMAL |
| category | VARCHAR |
| created_at | TIMESTAMP |

SQL:

```sql
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

product-management-system
│
├── src
│ ├── backend
│ │ ├── server.js
│ │ ├── db.js
│ │ └── routes
│ │ └── products.js
│ │
│ └── frontend
│ ├── index.html
│ ├── script.js
│ └── style.css
│
├── package.json
├── package-lock.json
└── README.md


---

## Database Schema

Table: products

| Column | Type |
|------|------|
| id | INT (Primary Key, Auto Increment) |
| name | VARCHAR |
| price | DECIMAL |
| category | VARCHAR |
| created_at | TIMESTAMP |

SQL:

```sql
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Setup Instructions
1 Install Dependencies
npm install
2 Setup MySQL Database

Create a database:

product_db

Run the table schema above.

3 Configure Database Connection

Update database credentials in:

src/backend/db.js

Example:

host: 'localhost'
user: 'root'
password: 'your_password'
database: 'product_db'
4 Run Backend Server
node src/backend/server.js

Server runs on:

http://localhost:5000
5 Run Frontend

Open:

src/frontend/index.html

in your browser.

API Endpoints
Get all products
GET /products
Search products
GET /products?search=keyword
Filter by category
GET /products?category=Electronics
Add product
POST /products
Delete product
DELETE /products/:id
Future Improvements

Edit product feature

Authentication system

Improved UI with React

Product image upload

Sorting options

Author

Shreya Raundal
BE Computer Science and Design Engineering


---

# After adding this

1️⃣ Save file as


README.md


2️⃣ Run

```bash
git add README.md
git commit -m "Added README documentation"
git push

database
<img width="1365" height="654" alt="image" src="https://github.com/user-attachments/assets/e57a56b4-34fe-4e61-9331-ae8dbb1ad3b6" />
Add the product
<img width="1294" height="697" alt="image" src="https://github.com/user-attachments/assets/6b6473e0-cccf-44a0-a85b-3df0fce776aa" />

Get product
<img width="1285" height="694" alt="image" src="https://github.com/user-attachments/assets/729df9b2-ecda-4f5a-af94-0e254a01caa5" />
multiple products 
<img width="1325" height="767" alt="image" src="https://github.com/user-attachments/assets/c512e9c5-a998-4f16-b0fd-f5c8a0cfa3cd" />


After UI
<img width="1350" height="625" alt="image" src="https://github.com/user-attachments/assets/10d0022c-b696-4e63-a2ad-82fe87391c78" />
paggination
<img width="1336" height="703" alt="image" src="https://github.com/user-attachments/assets/7433384d-f4be-4d03-9a9e-85dd293e5838" />




