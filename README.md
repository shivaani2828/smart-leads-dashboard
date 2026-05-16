# Final Smart Leads Dashboard

Complete MERN + TypeScript assignment structure.

# Smart Leads Dashboard

A production-style full-stack Lead Management Dashboard built using the MERN stack with TypeScript, JWT authentication, Role-Based Access Control, filtering, pagination, CSV export, and Docker support.

---

# Features

## Authentication System

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Authentication Middleware
* Role-Based Access Control (Admin / Sales)

## Leads Management

* Create Lead
* View Leads
* Update Lead
* Delete Lead
* View Single Lead Details

## Advanced Filtering & Search

* Filter by Status
* Filter by Source
* Search by Name or Email
* Sort by Latest / Oldest
* Multiple Filters Together

## Pagination

* Backend Pagination
* Limit 10 Records Per Page
* Pagination Metadata

## Additional Features

* Debounced Search
* CSV Export
* Docker Setup
* Responsive Dashboard UI
* Reusable Components
* Loading States
* Error Handling
* Empty States

---

# Tech Stack

## Frontend

* React.js
* TypeScript
* TailwindCSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

# Project Structure

```txt
smart-leads-dashboard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.ts
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── App.tsx
│
├── docker-compose.yml
├── README.md
└── .env.example
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/full-smart-leads-dashboard.git
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/smartleads
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Docker Setup

Run full application:

```bash
docker-compose up --build
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Leads

### Get All Leads

```http
GET /api/leads
```

### Create Lead

```http
POST /api/leads
```

### Update Lead

```http
PUT /api/leads/:id
```

### Delete Lead

```http
DELETE /api/leads/:id
```

---

# Filtering Example

```http
GET /api/leads?status=Qualified&source=Instagram&search=Rahul&page=1&sort=latest
```

---

# Pagination Response Example

```json
{
  "data": [],
  "total": 54,
  "page": 1,
  "totalPages": 6
}
```

---

# Roles

## Admin

* Full CRUD Access
* Manage Leads
* Delete Leads
* Update Leads

## Sales User

* Create Leads
* View Leads

---

# CSV Export

Users can export filtered lead data into CSV format directly from the dashboard.

---

# Validation & Error Handling

* Form Validation
* API Error Handling
* Protected Routes
* Invalid Token Handling
* Empty States
* Loading States

---

# Future Improvements

* Dark Mode
* Analytics Dashboard
* Charts & Reports
* Email Notifications
* Activity Logs

---

# Author

Shivaani

---


