ReactJS Assignment Application
📌 Project Overview

-This project is a multi-screen ReactJS application developed as part of a technical assessment.
-It demonstrates authentication, REST API integration, dynamic routing, camera access, and data visualization using charts.

The application consists of 4 primary screens along with an additional chart visualization screen.

🚀 Features
1️⃣ Login Page

-Simple authentication system
-Valid credentials:
-Username: testuser
-Password: Test123

Redirects to List Page upon successful login

2️⃣ List Page

-Fetches employee data from REST API
-Displays data in structured format

Navigation to:

-Employee Details Page
-Salary Chart Page

3️⃣ Details Page

-Displays complete information of selected employee
-Includes button to capture photo using device camera

4️⃣ Photo Result Page

-Displays the image captured from camera
-Allows user to verify captured photo

5️⃣ Chart Visualization Page

-Bar chart displaying salaries of the first 10 employees
-Provides visual representation of API data

🛠️ Tech Stack

-ReactJS (Vite)
-React Router DOM
-REST API Integration (Fetch/Axios)
-HTML5 Camera API (MediaDevices)
-Chart Library (Recharts / Chart.js)
-CSS

🔗 API Integration

Endpoint:

-https://backend.jotish.in/backend_dev/gettabledata.php

-Request Method: POST

Request Body:

{
  "username": "test",
  "password": "123456"
}
📁 Project Structure
src/
 ├── pages/
 │   ├── Login.jsx
 │   ├── List.jsx
 │   ├── Details.jsx
 │   ├── PhotoResult.jsx
 │   └── ChartPage.jsx
 ├── App.jsx
 └── main.jsx


Clone the repository

1.Install dependencies:

-npm install

2.Start development server:

-npm run dev

3.Open in browser:

-http://localhost:5173
