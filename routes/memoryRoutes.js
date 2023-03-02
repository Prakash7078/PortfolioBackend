import express from 'express';
import expressasynchandler from 'express-async-handler';
import memory from '../models/memoryModel.js';
const memrouter=express.Router();
memrouter.post('/memory',expressasynchandler(async(req,res)=>{
    const newmemory=new memory({
        name:req.body.name,
        ima:req.body.ima,
        des:req.body.des
    });
    const mem=await newmemory.save();
    res.send({
        _id:mem._id,
        name:mem.name,
        ima:mem.ima,
        des:mem.des,
    });
}));
export default memrouter;
