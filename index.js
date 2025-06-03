import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

app.listen(8081, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});

const userSchema = mongoose.Schema({
  name: { type:String},
  email: {type:String},
  password: {type:String}
});

const user = mongoose.model("User",userSchema);

const productSchema = mongoose.Schema({
  name:{type:String},
  price: {type:Number}
});

const product = mongoose.model("product",productSchema);

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Good Morning");
});

// app.get("/register", async (req,res) => {
//   const result = await user.insertOne({ name : "John"});
//   return res.json(result);
// });

app.post("/register", async (req,res) => {
  const {name, email, password} =req.body;
  const result = await user.insertOne({ name : name, email: email, password: password});//tradition way:{name,email,password}
  return res.json(result);
});

app.post("/login", async (req,res) => {
  const {email, password} =req.body;
  const result = await user.findOne({ email: email, password: password});
  if(!result) return res.json({message:"Invalid credentials"});
  return res.json(result);
});

app.get("/products",async (req,res) => {
  const products=await product.find();
    return res.json(products);
})

app.get("/greet",(req,res)=>{res.send("Greetings")})

app.get("/name",(req,res)=>{res.send("Narendar")})

app.get("/weather",(req,res)=>{res.send("31degree")})

// app.get("/products",(req,res)=>{
//     const products=[
//         {name:"Laptop",Price:50000},
//         {name:"Mobile",Price:20000},
//         {name:"Tablet",Price:30000}
//     ];
//     res.json(products);
// });

// app.get("/names",(req,res)=>{
//   res.send("Hello from Nare")
// })