# Node.js + MongoDB + Redis Demo

A full-stack backend boilerplate using **Node.js**, **Express**, **TypeScript**, **MongoDB**, and **Redis** with features like API documentation, caching, error handling, and unit testing. This project is ideal for learning or starting a scalable backend service.

---

## 🚀 Features

- ✅ Node.js + Express + TypeScript setup
- ✅ MongoDB integration using Mongoose
- ✅ Redis caching for performance
- ✅ Swagger UI for API documentation
- ✅ Centralized error handling
- ✅ Environment config with `.env`
- ✅ Unit tests with Jest and Supertest
- ✅ Linting and clean folder structure

---

## 📁 Folder Structure

```
node-mongo-redis-demo/
│
├── src/
│   ├── controllers/      # Controller logic
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   ├── services/         # Mongo + Redis logic
│   ├── middlewares/      # Error handling, validation, etc.
│   ├── utils/            # Redis client, logger
│   ├── config/           # DB/Redis configs
│   └── app.ts            # Express app setup
│
├── tests/                # Unit & integration tests
├── swagger.json          # API docs schema
├── .env                  # Environment variables
├── tsconfig.json         # TypeScript config
├── package.json          
└── README.md
```

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose
- **Cache**: Redis
- **Docs**: Swagger
- **Testing**: Jest + Supertest

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Rakesh-Debdarsan/node-mongo-redis-demo.git
cd node-mongo-redis-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/demo-db
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 4. Start the App

```bash
npm run dev
```

### 5. Run Tests

```bash
npm test
```

---

## 📘 API Documentation

Swagger UI available at:

```
http://localhost:5000/api-docs
```

---

## 🧪 Example Mongo Command

You can insert data into MongoDB manually via terminal:

```bash
mongosh
use demo-db
db.users.insertOne({ name: "John", email: "john@example.com" })
```

---

## 🧰 Useful Commands

```bash
npm run dev         # Start with nodemon
npm run build       # Compile TypeScript
npm test            # Run tests
```

---

## ✍️ Author

**Rakesh Debdarsan Swain**  
🔗 [GitHub](https://github.com/Rakesh-Debdarsan)

---

## 📄 License

This project is licensed under the MIT License.

---
