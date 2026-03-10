# product-management-system
Product listing with search and filter

# Product Management System

A simple full-stack application to manage products with search and filter functionality.

## Features
- View product list
- Search products by name
- Filter products by category
- Add new product

## Tech Stack
- Backend: Node.js, Express.js
- Database: MySQL
- Frontend: HTML, CSS, JavaScript

## Database Schema

Table: products

| Column | Type |
|------|------|
| id | INT (Primary Key) |
| name | VARCHAR(255) |
| price | DECIMAL |
| category | VARCHAR(100) |
| created_at | TIMESTAMP |

## Setup Instructions

1. Clone the repository

git clone <your-github-link>

2. Install dependencies

npm install

3. Run the backend server

node src/backend/server.js

4. Open frontend

src/frontend/index.html

## API Endpoints

GET /products  
POST /products  
GET /products?search=  
GET /products?category=

DataBase

CREATE DATABASE productdb;

USE productdb;

CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
price DECIMAL(10,2),
category VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


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




