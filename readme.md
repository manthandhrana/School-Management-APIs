# 🏫 School Management API

An Express-based API that returns nearby schools sorted by distance using real-time geolocation of the user.

---

## 🚀 Features

- List all schools from database 📋
- Calculate distance using user's current location 📍
- Haversine formula for accurate distance (in meters/km) 🌍
- Real-time browser-based location access 🛰️
- Sorted results by nearest first 🔄

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MySQL** 

---

## 📂 API Endpoints

### `GET /listSchools`

Returns a list of nearby schools with distance.

**Query Params**:

| Param     | Type   | Description                   |
|-----------|--------|-------------------------------|
| latitude  | float  | User's current latitude       |
| longitude | float  | User's current longitude      |

**Example**:

```http
GET http://localhost:3306/listSchools?latitude=22.2913135&longitude=70.7772998
```
![image](https://github.com/user-attachments/assets/3b145a9d-de8c-4597-8f58-3c2c3963330d)

## Response

```json
[
  {
    "id": 2,
    "name": "School Name",
    "address": "School Address",
    "latitude": "lang",
    "longitude": "long",
    "distance": "distance"
  }
]
```

### `POST /addSchool`

Adds a new school to the database.

#### **Request Body**:

```json
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 22.291313,
  "longitude": 70.777299
}
```

## **Response Body**:

  ```
  {
     message: 'School added successfully'
  }
  ```
![image](https://github.com/user-attachments/assets/0e7c7177-fb0c-4255-a27a-626d7b51a748)

---

## 🧑‍💻 Local Testing Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manthandhrana/School-Management-APIs.git
   cd School-Management-APIs
   ```

2. **Install dependencies:**
    ```bash
   npm install
   ```
---

3. **Setup .env file**
    - In the root directory of your project, create a .env file and add the following details:

    ```
    DB_HOST=YOUR_SERVER_NAME
    DB_USER=YOUR_USER_NAME
    DB_PASSWORD=YOUR_PASSWORD
    DB_NAME=YOUR_DB_NAME
    PORT=3000
    ```

4. **start the server**
    ```
    node server.js
    ```

### Key Highlights:
- **Features** section explains what the project does.
- **Technologies Used** section lists all the tools and libraries involved.
- **API Endpoints** explains how to use the `GET /listSchools` endpoint with query parameters and example responses.
- **Local Testing Setup** shows how to clone the repo, install dependencies, create the `.env` file, and start the server.
- **Geolocation and Distance Calculation** explains how real-time geolocation is used to calculate and return the distance from the user to nearby schools.
- **Testing Technologies** lists tools for testing the API.

