const dummyData = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Sara", age: 25 },
  { id: 3, name: "Ahmed", age: 30 },
  { id: 4, name: "Zara", age: 19 },
  { id: 5, name: "Bilal", age: 27 },
  { id: 6, name: "Fatima", age: 24 },
  { id: 7, name: "Usman", age: 29 },
  { id: 8, name: "Ayesha", age: 21 },
  { id: 9, name: "Hamza", age: 26 },
  { id: 10, name: "Noor", age: 23 }
];
// ===== FOR IMPORT EXPRESS =====
const app=require("express")()
// ===== PORT ASSIGN =====
const PORT=2005;
// ==== CORS ====
const cors = require("cors")();
app.use(cors);

app.get("/tshirt",(req,res)=>{
    res.status(200).send(dummyData)
})

app.listen(
    PORT ,() =>console.log(`it's loive on ${PORT}`)
    
)