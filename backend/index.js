//cd backend
//npm init --yes
//npm i express nodemon cors
///Running localhost:npm run start
///npm install nodemon --save for nodemon installation

const express=require('express');
const cors=require('cors');
const products=require("./products");

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to online shopping API..")
});
app.get("/products",(req,res)=>{
    res.send(products);
});

const port=process.env.PORT||5000;

app.listen(port,()=>{console.log(`Server running at port ${port}`)});
