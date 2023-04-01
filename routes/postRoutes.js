import multer from 'multer';
import postModel from '../models/postModel.js';
import express from 'express';
import path from 'path';
import fs from 'fs';
const postRouter = express.Router();

const uploadDir = path.join(process.cwd(), 'uploads');
const upload = multer({ dest: uploadDir });
const app=express();
// Make sure the uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

postRouter.get('/certificates', async (req, res) => {
  const certificates = await postModel.find();
  res.send(certificates);
});

postRouter.post('/certificate', upload.single('selectedFile'), async (req, res, next) => {
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

console.log('Uploads folder:', uploadDir);

export default postRouter;
