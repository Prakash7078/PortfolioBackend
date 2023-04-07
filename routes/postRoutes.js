import multer from 'multer';
import postModel from '../models/postModel.js';
import express from 'express';
import path from 'path';
import fs from 'fs';

const postRouter = express.Router();

const app = express();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

postRouter.get('/certificates', async (req, res) => {
  const certificates = await postModel.find();
  res.send(certificates);
});
postRouter.post('/certificate', upload.single('selectedFile'),async (req, res, next) => {
  const { name, issue, url, skills } = req.body;
  const newCertificate = new postModel({
    name,
    issue,
    url,
    selectedFile: req.file.filename,
    skills,
  });

  try {
    const certi = await newCertificate.save();
    res.status(201).json(certi);
  } catch (error) {
    next(error);
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});


export default postRouter;
