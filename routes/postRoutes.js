import express from 'express';
import postModel from '../models/postModel.js';
const postRouter=express.Router();
postRouter.get('/certificates',async(req,res)=>{
    const certificates=await postModel.find({});
    res.send(certificates);
})
postRouter.post('/certificate',async(req,res)=>{
    const {name,issue,url,selectedFile,skills}=req.body;
    const newCertificate=new postModel({
        name,
        issue,
        url,
        selectedFile,
        skills,
    });
   try{
        const certi=await newCertificate.save();
        res.status(201).json(certi);
   }catch (error) {
        res.status(409).json({ message: error.message });
    }
})
export default postRouter;