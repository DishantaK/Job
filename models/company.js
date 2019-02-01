const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: "You must include a title"
  },
  companydescription: {
    type: String,
    required: "You must include a description"
  },
  size: {},
  avatar: { data: Buffer, contentType: String },
  social: [],
  website: '', 
  username:{
    type:String,
    validate:[validator({
        length:{
            min:3,
            max:20
        }
    }), "username"],
    required:false,
    // default: "defaultusername"
},
password:{
    type:String,
    // required:true
},
email:{
    type:String,
    // required:true
},
registerDate:{
    type:Date,
    // required:true,
    default: Date.now
},
loginDate:{
    type:Date,
    // required:false
},
jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],

//   add more fields for company info
  
});

// Remember to edit type, and add company info, possibly a company schema
var Company = mongoose.model('Company', companySchema);

// Export the Tweet model
module.exports = Company;