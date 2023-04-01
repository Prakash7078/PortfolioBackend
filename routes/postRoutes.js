import multer from 'multer';
import postModel from '../models/postModel.js';
import express from 'express';
import path from 'path';
import fs from 'fs';

const postRouter = express.Router();

const uploadDir = path.join(process.cwd(), 'uploads');
const app = express();

// Make sure the uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const checkUploadsFolder = (req, res, next) => {
    const uploadDir = path.join(process.cwd(), 'uploads');
    const { filename } = req.file;
  
    // Check if the file is saved in the uploads folder
    if (fs.existsSync(path.join(uploadDir, filename))) {
      next();
    } else {
      res.status(500).send('Error: File not saved in uploads folder');
    }
  };
postRouter.get('/certificates', async (req, res) => {
  const certificates = await postModel.find();
  res.send(certificates);
});

postRouter.post('/certificate', upload.single('selectedFile'), checkUploadsFolder,async (req, res, next) => {
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
