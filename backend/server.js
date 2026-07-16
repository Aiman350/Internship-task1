

const express = require("express");
const cors = require("cors");

console.log("CORS Loaded:", cors);

const app = express();
app.use(cors());


const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Allied Software Engineers Internship  ,its full stack webdevelopment internship ");
});

app.get("/api/company", (req, res) => {
    res.json({
        company: "Allied Software Engineers",
        location: "Lahore, Pakistan",
        description: "its a software house ,that provide services of websites,applications and differnent customize softwares"
    });
});

app.get("/api/intern", (req, res) => {
    res.json({
        name: "Aiman Tahir",
        domain : "Web development",
        batch : "batch july-august",
        supervisor :"M.Ahsan Ali"
    });
});

app.get("/api/tasks", (req, res) => {
    res.json({
        tasks : [
        
           "Develop Express.js backend APIs",
        "Test API endpoints using Postman",
        "learn and implement Node.js and Express fundamentals"
        ]
    });
});

app.listen(PORT, () => {
    console.log(`my server that i created by node and express is running on port ${PORT}`);
});