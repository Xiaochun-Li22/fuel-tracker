# 🛢 Fuel Transaction Tracker

A full-stack web application for managing and visualizing fuel transaction records. This project is developed with **Spring Boot (Java)** for the backend and **React.js** for the frontend. It is inspired by a real-world operational system used in UN peacekeeping missions to process and analyze fuel usage data.

---

## 🔧 Project Structure

```
fuel-project/
├── backend/     → Spring Boot API server
├── frontend/    → React web interface
```

---

## 🚀 Features

- 🔐 Backend REST API with Spring Boot
- 📄 PostgreSQL database integration
- 📥 Add, view, search, and delete fuel transaction records
- 📊 Responsive frontend UI built with React and Bootstrap
- 🔍 Live search by vehicle ID or location
- ☁️ Ready for deployment on Render or other platforms

---

## 📦 Tech Stack

| Layer      | Technology      |
|------------|-----------------|
| Frontend   | React, Bootstrap |
| Backend    | Spring Boot, Java 17 |
| Database   | PostgreSQL |
| API Format | REST (JSON) |
| Deployment | Render (Static Site + Web Service) |

---

## 🖥️ Local Setup Instructions

### 🔹 Prerequisites

- Java 17+
- Node.js + npm
- PostgreSQL (or modify config for H2 in development)

---

### 🔹 Backend Setup (Spring Boot)

```bash
cd backend
# Set your DB credentials in src/main/resources/application.properties
./mvnw spring-boot:run
```

#### Sample API Endpoints:

- `GET /api/fuel` – Get all transactions
- `POST /api/fuel` – Add a transaction
- `DELETE /api/fuel/{id}` – Delete a transaction

---

### 🔹 Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

This runs the frontend on: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment

This project is designed to be deployed as:

- A **static frontend site** (e.g. via [Render Static Site](https://render.com/docs/static-sites))
- A **Spring Boot web service** (e.g. via [Render Web Service](https://render.com/docs/deploy-java))

> You can specify `frontend/` as the build root on Render and use `npm run build` → `build` as output directory.

---

## ✨ Future Improvements

- 🔒 Add JWT-based authentication
- 📈 Visualize data with charts (Chart.js or Recharts)
- 📁 Export data as CSV
- 🔎 Advanced filters and pagination

---

## 📄 License

MIT License. Free to use and modify.

---

## 🙋‍♀️ Author

**Xiaochun Li **  
- GitHub: [@Xiaochun-Li22](https://github.com/Xiaochun-Li22)
