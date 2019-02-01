const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const uuidv4 = require('uuid/v4');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  For company image post
// cloudinary.config({
//   cloud_name: process.env.djo29pmyz,
//   api_key: process.env.817297687836374 ,
//   api_secret: process.env.B9-Swz1MRJsccS7YgJURdiUrrJY
//   });
//   const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "uploads",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }]
//   });
//   const parser = multer({ storage: storage });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://dd2:Dee1234@ds225078.mlab.com:25078/heroku_xqk2sz7s" ,{useNewUrlParser: true } );
// || "mongodb://localhost/jobr" local

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});