import express from 'express';
import data from '../data.js';
import Others from '../models/othersModel.js';
import Product from '../models/productModel.js';
const seedRouter=express.Router();
seedRouter.get('/',async(req,res)=>{
    await Product.remove({});
    const createdPlaces=await Product.insertMany(data.hobies)
    await Others.remove({});
    const createdOthers=await Others.insertMany(data.others)
    res.send({createdPlaces,createdOthers});
});
export default seedRouter;