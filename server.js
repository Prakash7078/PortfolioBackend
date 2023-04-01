import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import msgRoutes from './routes/msgRoutes.js';
import cors from 'cors';
import productRouter from './routes/productRoutes.js';
import memrouter from './routes/memoryRoutes.js';
import postRouter from './routes/postRoutes.js';

const app=express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connect with DB");
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/seed',seedRouter);
app.use('/api/msgs',msgRoutes);
app.use('/api/memories',memrouter);
app.use('/api/products',productRouter);
app.use('/api/post',postRouter);
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
});
