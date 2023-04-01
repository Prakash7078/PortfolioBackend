import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import msgRoutes from './routes/msgRoutes.js';
import cors from 'cors';
import productRouter from './routes/productRoutes.js';
import memrouter from './routes/memoryRoutes.js';
import postRouter from './routes/postRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(cors());

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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
});
