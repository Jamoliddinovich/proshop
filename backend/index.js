import express from "express";
import Product from "./models/productModel.js";
import ConnectDB from "./config/db.js"
ConnectDB();
const app = express();
app.use(express.json());
app.get('/',async(req,res)=>{
res.send("API is running")
})
app.get('/api/products/:id',async(req,res)=>{
    const product = await Product.find({_id:req.params.id});
    res.json(product)
})
app.get('/api/products',async(req,res)=>{
    const products = await Product.find({});
    res.json(products)
    })
const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})