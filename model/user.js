const mongoose = require('mongoose')



//define schema or(field)
const UserSchema = new mongoose.Schema({

    name:{ 
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
   
    

},{timestamps:true})



//create collection
//where user is a collection name
//userschema is the field of bolg collection
const UserModel = mongoose.model('user',UserSchema)

module.exports =UserModel