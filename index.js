const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 2005;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON body

// Dummy data
let dummyData = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Sara", age: 25 },
  { id: 3, name: "Ahmed", age: 30 },
  { id: 4, name: "Zara", age: 19 },
  { id: 5, name: "Bilal", age: 27 },
];

// GET route — fetch all data
app.get("/tshirt", (req, res) => {
  res.status(200).json(dummyData);
});

// POST route — receive new data
app.post("/tshirt", (req, res) => {
  const { name, age } = req.body;
  const newEntry = {
    id: dummyData.length + 1,
    name,
    age: parseInt(age),
  };

  dummyData.push(newEntry);

  res.status(201).json({
    message: "Data received successfully!",
    newEntry,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
