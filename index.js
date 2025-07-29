import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { CssSyntaxError } from 'postcss';

const app = express();
const PORT = 4000;

// For ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for connect Css, js with html form
app.use(express.static(__dirname));

// Serve login.html directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alpha123', // your password
  database: 'property99'
});

db.connect(err => {
  if (err) {
    console.error('DB Connection Error:', err);
  } else {
    console.log('Connected to MySQL Database');
  }
});

// Register route
app.post('/register', (req, res) => {
  const { firstName, lastName, email, phone, password, userType } = req.body;
  const sql = 'INSERT INTO users (firstName, lastName, email, phone, password, userType) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, phone, password, userType], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error registering user' });
    }
    res.json({ message: 'User registered successfully' });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error logging in' });
    }

    if (results.length > 0) {
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
