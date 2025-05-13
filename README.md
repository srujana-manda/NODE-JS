# 🏫 School Management API

This is a simple Node.js + Express.js REST API for managing schools. It allows adding schools and retrieving a list of schools sorted by proximity to a user's location.

---

## 📌 Features

- ✅ Add a new school (`POST /addSchool`)
- ✅ List all schools sorted by distance to user's coordinates (`GET /listSchools`)

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MySQL
- Postman (for API testing)

---

## 🗃️ Database Schema

Create a `schools` table in your MySQL database:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
