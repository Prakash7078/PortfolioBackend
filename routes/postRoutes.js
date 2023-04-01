import multer from 'multer';
import postModel from '../models/postModel.js';
import express from 'express';
const postRouter = express.Router();
const upload = multer({ dest: 'uploads/' });
 // specify the destination folder for uploaded files

postRouter.get('/certificates', async (req, res) => {
  const certificates = await postModel.find();
  res.send(certificates);
});

postRouter.post('/certificate', upload.single('selectedFile'), async (req, res) => {
  const { name, issue, url, skills } = req.body;
  const newCertificate = new postModel({
    name,
    issue,
    url,
    selectedFile: req.file, // store the filename in the database instead of the file itself
    skills,
  });
  try {
    const certi = await newCertificate.save();
    res.status(201).json(certi);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export default postRouter;