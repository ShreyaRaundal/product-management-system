# product-management-system
Product listing with search and filter

# Product Management System

## Overview
This project is a Product Management System developed.It allows users to manage products with features like listing products, searching by name, filtering by category, adding new products, deleting products, and pagination.

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





