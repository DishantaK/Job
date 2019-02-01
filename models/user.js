

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
 
    name:{
        type:String,
        required:false,
        default: ""
    },
    username:{
        type:String,
        validate:[validator({
            length:{
                min:3,
                max:20
            }
        }), "username"],
        required:false,
        default: "defaultusername"
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    registerDate:{
        type:Date,
        required:true,
        default: Date.now
    },
    loginDate:{
        type:Date,
        required:false
    }

});


var User = mongoose.model('User', userSchema);


module.exports = User;