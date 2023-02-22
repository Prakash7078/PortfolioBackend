import express from 'express';
import Product from '../models/productModel.js';
import Others from '../models/othersModel.js';
import educate from '../models/educationModel.js';
const productRouter=express.Router();
productRouter.get('/hobies',async(req,res)=>{
    const products=await Product.find();
    res.send(products);
});
productRouter.get('/others',async(req,res)=>{
    const products=await Others.find();
    res.send(products);
});
export default productRouter;