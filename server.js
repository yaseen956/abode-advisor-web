import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000; // Only one server port

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
// -----------------------------
// ✅ MongoDB (for property listing)
// -----------------------------
mongoose.connect('mongodb://localhost:27017/property99')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Define Mongoose schema
const propertySchema = new mongoose.Schema({
  listingType: String,
  propertyType: String,
  propertyTitle: String,
  propertyDescription: String,
  bedrooms: String,
  bathrooms: String,
  builtupArea: Number,
  carpetArea: Number,
  totalFloors: String,
  propertyFloor: String,
  furnishing: String,
  facing: String,
  propertyAge: String,
  address: String,
  city: String,
  locality: String,
  pincode: String,
  landmark: String,
  amenities: [String],
  propertyImages: [String],
  expectedPrice: Number,
  priceUnit: String,
  negotiable: String,
  availability: String,
  availableDate: Date,
  ownerName: String,
  ownerType: String,
  contactPhone: String,
  contactEmail: String,
  contactTime: String,
  whatsappUpdates: Boolean,
  agreeTerms: Boolean,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'approved' }
});

// const Property = mongoose.model('Property', propertySchema);

// MongoDB routes
app.post('/api/sell-property', async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json({ message: 'Property listed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving property', error });
  }
});

app.get('/api/properties', async (req, res) => {
  try {
    const listings = await Property.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listings', error });
  }
});

// -----------------------------
// ✅ MySQL (for user login/register)
// -----------------------------
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alpha123', // change if needed
  database: 'property99'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ MySQL connected');
  }
});

app.post('/register', (req, res) => {
  const { firstName, lastName, email, phone, password, userType } = req.body;
  const sql = 'INSERT INTO users (firstName, lastName, email, phone, password, userType) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, phone, password, userType], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Registration failed' });
    }
    res.json({ message: 'User registered successfully' });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Login failed' });
    if (results.length > 0) {
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// -----------------------------
// ✅ Start Server
// -----------------------------
app.listen(PORT, () => {
  console.log(`🚀 Unified server running on http://localhost:${PORT}`);
});
