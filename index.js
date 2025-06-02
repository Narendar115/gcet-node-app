import express from "express";
import cors from 'cors'
const app = express();
app.listen(8080, () => {
  console.log("Server Started");
});
app.use(cors())
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.get("/greet",(req,res)=>{res.send("Greetings")})

app.get("/name",(req,res)=>{res.send("Narendar")})

app.get("/weather",(req,res)=>{res.send("31degree")})

app.get("/products",(req,res)=>{
    const products=[
        {name:"Laptop",Price:50000},
        {name:"Mobile",Price:20000},
        {name:"Tablet",Price:30000}
    ];
    res.json(products);
})