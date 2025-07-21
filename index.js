const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory array to simulate database
const tshirts = [{
  name: "fasih",
}];

// ✅ POST Route — Save new T-shirt
app.post('/tshirt', (req, res) => {
  try {
    const newTshirt = req.body;
    newTshirt.id = Date.now(); // simple ID generator
    tshirts.push(newTshirt); // ✅ Add it to array

    console.log('New T-shirt added:', newTshirt); // ✅ Log here where it's defined

    res.json({ message: '✅ T-shirt saved (in memory)!', data: newTshirt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET Route — Fetch all T-shirts
app.get('/tshirt', (req, res) => {
  try {
    res.json(tshirts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
