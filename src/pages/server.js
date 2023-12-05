
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Create Express app
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "ottUser",
  password: "mjTheGreat11@",
  database: "ott",
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("mjTheGreat11@", "utf-8"),
  },
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

//join us page
app.post("/saveUserInfo", (req, res) => {
  const { ID, password, userName, email, age } = req.body;
  const sql = "INSERT INTO users (ID, password, userName, email, age) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [ID, password, userName, email, age], (err, result) => {
    if (err) {
      console.error("Error saving user information:", err);
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    } else {
      console.log("User information saved successfully");
      res.status(200).send("User information saved successfully");
    }
  });
});
//Login
app.post('/login', (req, res) => {
  const {userID, password} = req.body;
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [userID], (err,result) => {
    if(err){
      console.error('Error updating transcript:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
    if(result.length === 0){
      console.log('User with ID not found');
      return res.status(404).send("User not found");
    }
    const user = result[0];
    if(result[0].password === user.password){
      console.log("Success Login");
      res.json({message: "Login Successful", userID});
    }else{
      console.log("failed Login");
      res.status(404).send("Invaild Password");
    }
  })
})







// Save student ID endpoint
app.post("/saveStudentID", (req, res) => {
  const { studentID } = req.body;
  const sql = "INSERT INTO students (student_id) VALUES (?)";

  db.query(sql, [studentID], (err, result) => {
    if (err) {
      console.error("Error saving student ID:", err);
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    } else {
      console.log("Student ID saved successfully");
      res.status(200).send("Student ID saved successfully");
    }
  });
});
app.get("/getAllCourseIDs", (req, res) => {
  if (req.method === "GET") {
    console.log("Received GET request for /getAllCourseIDs");
    
    const sql = "SELECT course_id FROM courses";
    
    db.query(sql, (err, result) => {
      if (!err) {
        const courses = result.map((course) => ({ course_id: course.course_id }));
        console.log("Sending courses:", courses);
        res.json(courses);
      } else {
        console.error("Error fetching course names:", err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  }
});
// Get all course data endpoint
app.get("/getAllCourses", (req, res) => {
  const sql = "SELECT * FROM courses";
  
  db.query(sql, (err, result) => {
    if (!err) {
      console.log("Sending courses:", result);
      res.json(result);
    } else {
      console.error("Error fetching courses:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
