const express = require('express');
const path = require("path");
const multer = require("multer");
const bodyParser = require('body-parser');
const Memory = require('./models/memory');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb+srv://swabhi:qoITVu8Kxkajx4wJ@cluster0-mrfpl.mongodb.net/tooldb?retryWrites=true')
.then(() => {
    console.log('Connected to DB');
})
.catch(() => {
    console.log('Connection to DB failed');
});

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
  };
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
      const name = file.originalname
        .toLowerCase()
        .split(" ")
        .join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    }
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*", "always");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");

    next();
});



app.get('/api/memories', (req, res, next) => {
    console.log('hi');
    Memory.find().then(result => {
        console.log('hi1');
        console.log(result);
        res.status(200).json({
            message: 'Memories fetched successfully',
            memories: result
        });
    });

    
});

app.post('/api/memories', multer({ storage: storage }).single("image"), (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const memory = new Memory({
        caption: req.body.caption,
        imagePath: url + "/images/" + req.file.filename,
        date: Date.now(),
        addedBy: ''
    });
    console.log(memory);
    memory.save();
    res.status(201).json({
        message: 'Memory added successfully',
        memory: memory
    });
});

module.exports = app;