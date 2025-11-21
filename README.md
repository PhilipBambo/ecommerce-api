# 🛒 Mini eCommerce REST API

A backend REST API built with **Node.js**, **Express**, and **MongoDB**, demonstrating essential backend skills such as authentication, protected routes, CRUD operations, and clean API design.  
This project was created for portfolio and job application purposes.

---

## 🚀 Features

### 👤 Users
- Register new users  
- Login with JWT authentication  
- Password hashing (bcrypt)  
- Protected routes

### 🛍 Products
- Create new products (requires token)  
- Get all products  

### 📦 Orders
- Create orders with products  
- Automatic total price calculation  
- Protected endpoints

---

## 🧰 Technologies Used
- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT**
- **bcryptjs**
- **dotenv**

---

## ⚙️ Installation


npm install

---

## Create .env

- PORT=5000
- MONGO_URI=mongodb://127.0.0.1:27017/ecommerceDB
- JWT_SECRET=your_secret_here

---

## Run the server

- npm run dev

---

