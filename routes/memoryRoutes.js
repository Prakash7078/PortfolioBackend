import express from 'express';
import expressasynchandler from 'express-async-handler';
import memory from '../models/memoryModel.js';
const memrouter=express.Router();
memrouter.get('/comments',async(req,res)=>{
    const comments=await memory.find();
    res.send(comments);
})
memrouter.post('/memory',expressasynchandler(async(req,res)=>{
    const newmemory=new memory({
        name:req.body.name,
        des:req.body.des,
    });
    const mem=await newmemory.save();
    res.send({
        _id:mem._id,
        name:mem.name,
        des:mem.des,
    });
}));
export default memrouter;
