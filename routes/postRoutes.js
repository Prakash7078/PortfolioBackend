import multer from 'multer';
import postModel from '../models/postModel.js';
import express from 'express';
const postRouter = express.Router();

// set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // specify the destination folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original filename
  }
});

// initialize multer upload with storage configuration
const upload = multer({ storage });
postRouter.get('/certificates',async(req,res)=>{
    const certi=await postModel.find({});
    res.send(certi);
})
// define the route to handle file upload
postRouter.post('/certificate', upload.single('selectedFile'), async (req, res) => {
  const { name, issue, url, skills } = req.body;
  const selectedFile = req.file.path;

  try {
    const newCertificate = new postModel({
      name,
      issue,
      url,
      selectedFile,
      skills
    });

    const certi = await newCertificate.save();
    res.status(201).json(certi);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
export default postRouter;