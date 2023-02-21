import express from 'express';
import data from '../data.js';
import Others from '../models/othersModel.js';
import Product from '../models/productModel.js';
import User from '../models/UserModel.js';
const seedRouter=express.Router();
seedRouter.get('/',async(req,res)=>{
    await Product.remove({});
    const createdPlaces=await Product.insertMany(data.hobies)
    await Others.remove({});
    const createdOthers=await Others.insertMany(data.others)
    await User.remove({});
    const createdUsers=await User.insertMany(data.users);
    res.send({createdUsers,createdPlaces,createdOthers});
});
export default seedRouter;