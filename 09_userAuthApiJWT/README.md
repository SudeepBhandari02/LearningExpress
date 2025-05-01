# 🛡️ JWT Authentication API (Node.js + Express + MongoDB)

A simple and secure authentication API built using **Express**, **MongoDB**, **Mongoose**, **JWT**, and **bcrypt**. It supports user registration, login, and access to a protected profile route.

---

## 📁 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Security**: bcrypt for password hashing
- **Environment Config**: dotenv

---

## 🚀 Features

-  User Registration (Sign Up)
-  User Login (with JWT generation)
-  Protected Profile Route (requires valid token)
-  Passwords hashed using bcrypt
-  JWT stored and validated using `Authorization` header

---

## 📂 Folder Structure

```
project/
│
├── config/
│   └── db.js                 # MongoDB connection
│
├── controllers/
│   └── authController.js     # Signup, Login, Profile handlers
│
├── middlewares/
│   └── authMiddleware.js     # JWT validation middleware
│
├── models/
│   └── User.js               # User schema
│
├── routes/
│   └── authRoutes.js         # Auth API routes
│
├── .env                      # Environment variables
├── app.js                    # App entry point
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jwt-auth-api.git
cd jwt-auth-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> ⚠️ Keep `JWT_SECRET` strong and private.

### 4. Start the Server

```bash
npm run dev
```

---

## 📬 API Endpoints

### 🔹 Register User

`POST /api/auth/signup`

```json
{
  "email": "john@example.com",
  "password": "mypassword"
}
```

### 🔹 Login User

`POST /api/auth/login`

```json
{
  "email": "john@example.com",
  "password": "mypassword"
}
```

> 🔑 Returns a JWT token.

### 🔒 Get Profile (Protected)

`GET /api/auth/profile`

Add the token to headers:

```
Authorization: Bearer <your_token_here>
```

---

## 📌 Important Concepts

- **Authentication vs Authorization**
- **JWT Flow**: Sign → Send → Verify
- **Password Hashing**: `bcrypt.hash()` and `bcrypt.compare()`
- **Environment Security** using `.env` and `dotenv`

---

## 🧪 Testing Tools

Use **Postman** or **Thunder Client** to test API endpoints with JSON body and headers.

---