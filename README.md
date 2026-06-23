# 💰 BJSN Finance Management System

A secure full-stack finance and pawn management application built using **Spring Boot**, **React**, and **PostgreSQL** to manage customer loans, pledged items, interest calculations, PDF reporting, and SMS notifications.

---
Screenshots
Item Management<img width="1485" height="592" alt="Screenshot 2026-06-23 095320" src="https://github.com/user-attachments/assets/99d4d525-0b6e-4f08-a810-845ad8c83554" />


Monthly Report Generation
<img width="1912" height="768" alt="image" src="https://github.com/user-attachments/assets/d198a8ab-16bf-4d00-a4ec-bea81831043d" />


Backend Architecture
<img width="1547" height="500" alt="Screenshot 2026-06-23 104151" src="https://github.com/user-attachments/assets/7ce381da-5af2-412c-9af9-0d6a8f39e17e" />
add your own passwords and details 


## 🚀 Features

### 🔐 Authentication & Authorization
- JWT Authentication
- Spring Security Integration
- Role-Based Access Control (ADMIN, ANALYST, VIEWER)
- Protected REST APIs

### 👥 Customer & Loan Management
- Add New Loan Records
- Update Existing Records
- Delete Records
- Search by Jewel Number
- Customer Information Management

### 💍 Item Management
- Jewel Number Tracking
- Item Type Categorization
- Active / Released Status Tracking
- Loan Amount Management

### 📈 Interest Calculation Engine
- Simple Interest Calculation
- Compound Interest Calculation
- Monthly Interest Rate Support
- Release Amount Estimation
- Override Date Support

### 📄 PDF Report Generation
- Monthly Financial Reports
- Status Based Filtering
- Downloadable PDF Reports

### 📲 Notification System
- SMS Reminder Integration
- Twilio API Support
- Customer Follow-Up Notifications

### 🥇 Metal Rate Tracking
- Live Gold Rates
- Live Silver Rates

---

# 🛠 Technology Stack

## Backend
- Java 21
- Spring Boot 3
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- Maven

## Frontend
- React
- Vite
- Tailwind CSS
- Axios

## Database
- PostgreSQL

## External Services
- Twilio SMS API
- Metal Rate API

---

# 🏗 System Architecture

```text
React Frontend
       │
       ▼
Spring Boot REST API
       │
 ┌─────┼───────────┐
 ▼     ▼           ▼
JWT  PostgreSQL  Twilio
Auth Database    SMS
```

---

# 📂 Project Structure

```text
finance-management-system
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── module
│   └── security
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
├── screenshots
│
└── README.md
```

---

# 🔑 Authentication APIs

## Register User

### Endpoint

```http
POST /register
```

### Request

```json
{
  "username": "admin",
  "password": "admin123",
  "role": "ADMIN"
}
```

---

## Login

### Endpoint

```http
POST /login
```

### Request

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### Response

```text
JWT_TOKEN
```

---

# 📦 Item Management APIs

## Add Item

### Endpoint

```http
POST /bjsn/item
```

### Request Body

```json
{
  "jwlno": 1001,
  "name": "Sarvesh",
  "fathername": "Suresh",
  "principalamt": 20000,
  "stdate": "2025-05-23",
  "address": "ABC Street",
  "itemtype": "Gold",
  "number": 9876543210,
  "status": true
}
```

---

## Get Item

### Endpoint

```http
GET /bjsn/item/{jwlno}
```

### Example

```http
GET /bjsn/item/1001
```

---

## Update Item

### Endpoint

```http
PUT /bjsn/item/{jwlno}
```

---

## Delete Item

### Endpoint

```http
DELETE /bjsn/item/{jwlno}
```

---

## Calculate Interest Details

### Endpoint

```http
GET /bjsn/item/{jwlno}/interest/details
```

### Example

```http
GET /bjsn/item/1001/interest/details?monthlyRate=2
```

### With Override Date

```http
GET /bjsn/item/1001/interest/details?monthlyRate=2&overrideDate=2026-01-01
```

---

## Release Item

### Endpoint

```http
PUT /bjsn/item/{jwlno}/release
```

### Response

```text
Item marked as Released
```

---

## Update Item Status

### Endpoint

```http
PUT /bjsn/item/{jwlno}/status?status=false
```

---

## Filter Items

### Endpoint

```http
GET /bjsn/filter?type=gold&category=active
```

---

# 📄 Report APIs

## Download Monthly Report

### Endpoint

```http
GET /bjsn/items/report/pdf
```

### Parameters

```text
month
year
monthlyRate
filterStatus
```

### Example

```http
GET /bjsn/items/report/pdf?month=6&year=2026&monthlyRate=2&filterStatus=Active
```

---

# 📊 Summary APIs

## Total Loan Amount

### Endpoint

```http
GET /summary/total-loan
```

---

## Filter Summary Records

### Endpoint

```http
GET /summary/filter
```

---

# 🥇 Metal Rate APIs

## Get Gold & Silver Rates

### Endpoint

```http
GET /api/metal-rates
```

### Sample Response

```json
{
  "gold": 9850,
  "silver": 115
}
```

---

# 🧪 Testing Backend APIs Using Postman

## Step 1: Login

```http
POST http://localhost:8080/login
```

Copy the JWT token from the response.

---

## Step 2: Add Authorization Header

### Key

```text
Authorization
```

### Value

```text
Bearer YOUR_JWT_TOKEN
```

---

## Step 3: Test APIs

### Create Item

```http
POST http://localhost:8080/bjsn/item
```

### Get Item

```http
GET http://localhost:8080/bjsn/item/1001
```

### Calculate Interest

```http
GET http://localhost:8080/bjsn/item/1001/interest/details?monthlyRate=2
```

### Generate PDF Report

```http
GET http://localhost:8080/bjsn/items/report/pdf?month=6&year=2026&monthlyRate=2
```

### Get Metal Rates

```http
GET http://localhost:8080/api/metal-rates
```

---

# 🗄 Database Entity

| Field | Type |
|---------|---------|
| jwlno | Integer |
| name | String |
| fathername | String |
| principalamt | Double |
| stdate | LocalDate |
| address | String |
| itemtype | String |
| number | Long |
| status | Boolean |
| reminderDate | LocalDate |
| months | Integer |
| simpleInterest | Double |
| compoundInterest | Double |

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/bjsn-finance-management-system.git
```

---

## Backend Setup

```bash
cd backend
```

### Configure PostgreSQL

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/finance
spring.datasource.username=postgres
spring.datasource.password=password

jwt.secret=your_secret_key
```

### Run Application

```bash
mvn spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 🔮 Future Enhancements

- Dashboard Analytics
- WhatsApp Notifications
- Multi-Branch Management
- AWS Cloud Deployment
- Mobile Application
- AI-Based Financial Insights

---

# 👨‍💻 Author

### Nithyanandham J

Java Backend Developer | Spring Boot Developer | Full Stack Developer

**Skills**

- Java
- Spring Boot
- Spring Security
- PostgreSQL
- React
- REST APIs
- JWT Authentication
- Git & GitHub

---

## ⭐ If you found this project useful, give it a star on GitHub.
