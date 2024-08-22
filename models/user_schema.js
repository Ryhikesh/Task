var mongoose = require('mongoose'),
connectionOne = require('../db/db');
var Schema = mongoose.Schema;

var userSchema=new Schema({
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String},
    email:{type:String},
    phone:{type:Number},
    role:{type:String}
});

var User=connectionOne.model('userdetails', userSchema);

module.exports = User;

/* module.exports = {
    User:user,
    UserAddress:useraddress
}; */