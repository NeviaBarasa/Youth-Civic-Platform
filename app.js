const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use (express.static('public',{root:__dirname}));

app.use(express.urlencoded({extended: false}))

// MySQL Connection
const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});


// -- Users Table
const T1 = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(255) NOT NULL,email VARCHAR(255) UNIQUE NOT NULL,password_hash VARCHAR(255) NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

db.query(T1,(err)=>{
    if(err){
        console.log('error creating table',err.message)

    } else {
        console.log('table created successfully')
    }
    
});

// -- Forums Table
const T2 = "CREATE TABLE IF NOT EXISTS forums (id INT AUTO_INCREMENT PRIMARY KEY,topic VARCHAR(255) NOT NULL,description TEXT,user_id INT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY (user_id) REFERENCES users(id))";

db.query(T2,(err)=>{
    if(err){
        console.log('error creating table',err.message)

    } else {
        console.log('table created successfully')
    }
    
});


// -- Polls Table
const T3 = "CREATE TABLE IF NOT EXISTS polls (id INT AUTO_INCREMENT PRIMARY KEY,question VARCHAR(255) NOT NULL,options TEXT, votes_count INT DEFAULT 0,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

db.query(T3,(err)=>{
    if(err){
        console.log('error creating table',err.message)

    } else {
        console.log('table created successfully')
    }
    
});


app.get('/home',(req,res)=>{
    res.sendFile('index.html', {root:__dirname})
});




// fetching forums
app.get('/forums', (req, res) => {
  db.query('SELECT * FROM forums', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new forum topic
app.post('/forums', (req, res) => {
  const { topic, description, user_id } = req.body;
  db.query('INSERT INTO forums (topic, description, user_id) VALUES (?, ?, ?)', 
  [topic, description, user_id], 
  (err, result) => {
    if (err) throw err;
    res.json({ message: 'Forum created!', id: result.insertId });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
