# Allied Software Engineers Internship Dashboard

A Full Stack MERN Internship Dashboard developed as part of the Allied Software Engineers Internship Assessment. This project demonstrates the integration of a React frontend with a Node.js and Express backend using REST APIs and the Fetch API.

---

##Project Overview

The application provides a simple dashboard for interns to view their internship details and assigned tasks.

The project consists of two parts:

- **Backend:** Node.js + Express.js REST API
- **Frontend:** React + Vite

The frontend fetches live data from the backend and displays it in a clean and responsive user interface.

---

##  Features

### Backend

- Express.js server
- REST API development
- Company information endpoint
- Intern information endpoint
- Internship tasks endpoint
- JSON responses
- CORS enabled for frontend communication

### Frontend

- React application using Vite
- Functional components
- React Hooks (`useState`, `useEffect`)
- Fetch API integration
- Dynamic rendering of internship information
- Dynamic rendering of internship tasks
- Professional and responsive UI
- View Details button

---

## Technologies Used

### Frontend
- React.js
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- CORS

### Tools
- Visual Studio Code
- Git
- GitHub

---

##  Project Structure

```
allied-internship-dashboard
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

##  API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Welcome Route |
| GET | `/api/company` | Returns company information |
| GET | `/api/intern` | Returns intern details |
| GET | `/api/tasks` | Returns internship tasks |

---

##  Internship Information Displayed

- Company Name
- Internship Title
- Intern Name
- Domain
- Batch
- Supervisor Name
- Internship Tasks

---

##  Application Workflow

1. Backend server starts on **Port 5000**.
2. React frontend starts using **Vite**.
3. React sends HTTP requests using the Fetch API.
4. Express APIs return JSON responses.
5. React updates the dashboard dynamically with live data.

---

##  Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/allied-internship-dashboard.git
```

---

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

##  Project Preview


Example:
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/098234da-7400-469f-987e-6b0e5bcffa3e" />

```
screenshots/dashboard.png
```



## 📚 Concepts Practiced

- React Components
- React Hooks
- useState
- useEffect
- Fetch API
- Express.js Routing
- REST APIs
- JSON Responses
- CORS
- Git
- GitHub
- Project Structure

---

## 🎯 Learning Outcome

Through this project, I gained practical experience in building and connecting a React frontend with a Node.js and Express backend. I learned how to create REST APIs, fetch live data, manage React state, structure a full-stack project, and use Git and GitHub for version control.

---

## 👨‍💻 Author

**Aiman Tahir**

BS Software Engineering

Full Stack Developer

GitHub: https://github.com/Aiman350



---



This project was developed as part of the **Allied Software Engineers Internship Assessment** to demonstrate practical knowledge of Full Stack Web Development using the MERN stack.
