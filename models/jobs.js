const mongoose = require('mongoose');
require('mongoose-type-url');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: "You must include a title."
  },
  description: {
    type: String,
    // required: "You must include a description."
  },
  salary: {
    type: String,
    // required: "What is the range in which you will compensate an employee?"
  },
  type: {
    type: String ,
  
  },
  industry: {
    type: String,
    // required: ""
  },
  skills: {
    type: [],
  
  },

  location: {
    type: String,
    // required: "You must include some content in your note"
  },
  company: {
    type: String,
    // required: "You must include some content in your note"
  },
  companydescription: {
    type: String,
    // required: "You must include some content in your note"
  },
 
  joburl: {
    type: String,
  },
  avatar: {
    type: String,
  },
  created_at: {type: Date, default: Date.now}
  
});


var Job = mongoose.model('Job', jobSchema);

// Export the Tweet model
module.exports = Job;