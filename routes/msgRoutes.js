import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import msg from '../models/msgModel.js';
const msgRoutes=express.Router();
msgRoutes.post('/send',expressAsyncHandler(async(req,res)=>{
    const newmsg=new msg({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        text:req.body.text,
    });
    const msgs=await newmsg.save();
    res.send({
        _id:msgs._id,
        name:msgs.name,
        phone:msgs.phone,
        email:msgs.email,
        text:msgs.text,
    });
}));
export default msgRoutes;