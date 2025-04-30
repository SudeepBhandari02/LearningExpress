# 📝 Simple Notes API (Express + Mongoose)

A beginner-friendly **RESTful API** built using **Node.js**, **Express**, and **MongoDB** with **Mongoose** for managing personal notes. It supports all basic CRUD operations with optional filtering for pinned notes.

---

## 📂 Project Structure

```
notes-api/
├── controllers/        # Controller logic for API
│   └── noteController.js
├── models/             # Mongoose schemas/models
│   └── Note.js
├── routes/             # Express routes
│   └── noteRoutes.js
├── config/             # Database connection setup
│   └── mongoose.js
├── app.js              # Main application file
├── package.json        # Project metadata and dependencies
└── .env                # Environment variables (Mongo URI)
```

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Add `.env` File

Create a `.env` file in the root with:

```
MONGO_URI=mongodb://127.0.0.1:27017/notesdb
```

### ▶️ Run the Server

```bash
npm run start
```

Server runs on: `http://localhost:3000`

---

## 🔧 API Endpoints

| Method | Route                | Description              |
|--------|----------------------|--------------------------|
| `POST` | `/api/notes`         | Create a new note        |
| `GET`  | `/api/notes`         | Get all notes            |
| `GET`  | `/api/notes?pin=true`| Get only pinned notes    |
| `GET`  | `/api/notes/:id`     | Get a single note by ID  |
| `PUT`  | `/api/notes/:id`     | Update a note            |
| `DELETE` | `/api/notes/:id`   | Delete a note            |

---

## 🧪 Sample Note Payload

```json
{
  "title": "Learn Mongoose",
  "content": "Understand how to connect and model data in MongoDB.",
  "tags": ["mongodb", "mongoose"],
  "pinned": true
}
```

---

## ✅ Features

- Create, update, delete, and fetch notes
- Filter pinned notes via query params
- Uses `express.json()` for parsing JSON
- MongoDB connection via `.env` and Mongoose
- Clean and modular code structure

---

## 📌 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- Nodemon (for development)

---

## 🙌 Author

Built with ❤️ by SudeepBhandari

---
