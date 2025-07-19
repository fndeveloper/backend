// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(
  'mongodb+srv://fasihnasir60:YKlKFIggPt9jvbCd@api.qjijy60.mongodb.net/tshirtDB?retryWrites=true&w=majority&appName=api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// ✅ Mongoose Schema & Model
const TshirtSchema = new mongoose.Schema({
  name: String,
  age: Number, // not String
});

const Tshirt = mongoose.model('Tshirt', TshirtSchema);

// ✅ POST request — React se data aayega
app.post('/tshirt', async (req, res) => {
  try {
    const tshirt = new Tshirt(req.body);
    await tshirt.save();
    res.status(201).json({ message: '✅ Data saved', data: tshirt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET request — MongoDB se data milega
app.get('/tshirt', async (req, res) => {
  try {
    const data = await Tshirt.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start the server
const PORT = 3000;
app.listen(PORT, async () => {


  // Optional: Fetch all t-shirts on server start (just for debug)
  const allTshirts = await Tshirt.find();
  console.log('🧥 T-Shirts in DB:', allTshirts);
});

